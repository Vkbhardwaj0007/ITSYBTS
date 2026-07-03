import { Router } from "express";
import crypto from "crypto";
import Razorpay from "razorpay";
import { Product, Order } from "../models.js";
import { optionalAuth } from "../middleware/auth.js";

const router = Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const genOrderNo = () =>
  "ORD" + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 900 + 100);

/* ----------------------------------------------------------------------- */
/* POST /api/payment/create-order                                          */
/* Body: { items: [{ productId, qty }], address }                          */
/*                                                                          */
/* SECURITY: the amount is computed on the server from DB prices.          */
/* We never trust an amount sent by the client.                            */
/* ----------------------------------------------------------------------- */
router.post("/create-order", optionalAuth, async (req, res) => {
  try {
    const { items, address } = req.body;
    if (!Array.isArray(items) || items.length === 0)
      return res.status(400).json({ error: "Cart is empty" });

    // 1. Look up real prices from the database
    const ids = items.map((i) => i.productId);
    const products = await Product.find({ _id: { $in: ids } });
    const map = Object.fromEntries(products.map((p) => [String(p._id), p]));

    let subtotal = 0;
    const lineItems = [];
    for (const i of items) {
      const p = map[String(i.productId)];
      if (!p) return res.status(400).json({ error: `Invalid product: ${i.productId}` });
      const qty = Math.max(1, parseInt(i.qty, 10) || 1);
      subtotal += p.price * qty;
      lineItems.push({ product: p._id, name: p.name, price: p.price, qty });
    }

    const delivery = subtotal > 0 && subtotal < 5000 ? 99 : 0;
    const amount = subtotal + delivery; // ₹
    const amountPaise = Math.round(amount * 100); // Razorpay works in paise

    // 2. Create the Razorpay order
    const rzpOrder = await razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      receipt: genOrderNo(),
      notes: { app: "VoltMart" },
    });

    // 3. Save a local order in "created" state
    const order = await Order.create({
      orderNo: rzpOrder.receipt,
      user: req.user?.id || null,
      items: lineItems,
      subtotal,
      delivery,
      amount,
      address,
      status: "created",
      payment: { razorpayOrderId: rzpOrder.id },
    });

    // 4. Send what the frontend Razorpay checkout needs
    res.json({
      orderId: order._id, // our DB order id
      razorpayOrderId: rzpOrder.id,
      amount: amountPaise,
      currency: "INR",
      keyId: process.env.RAZORPAY_KEY_ID, // publishable key only
    });
  } catch (err) {
    console.error("create-order error:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ----------------------------------------------------------------------- */
/* POST /api/payment/verify                                                */
/* Body: { orderId, razorpay_order_id, razorpay_payment_id,                */
/*         razorpay_signature }                                            */
/*                                                                          */
/* Verifies the signature returned by Razorpay checkout. Only a valid      */
/* HMAC marks the order as paid.                                           */
/* ----------------------------------------------------------------------- */
router.post("/verify", optionalAuth, async (req, res) => {
  try {
    const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const valid = expected === razorpay_signature;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: "Order not found" });

    if (!valid) {
      order.status = "failed";
      await order.save();
      return res.status(400).json({ error: "Payment verification failed" });
    }

    if (order.status !== "paid") {
      order.status = "paid";
      order.payment.razorpayPaymentId = razorpay_payment_id;
      order.payment.signatureVerified = true;
      await order.save();

      for (const item of order.items) {
        await Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.qty } });
      }
    }

    res.json({ success: true, order });
  } catch (err) {
    console.error("verify error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

/* ----------------------------------------------------------------------- */
/* Webhook handler (registered in server.js with express.raw)              */
/* Set the URL + secret in Razorpay Dashboard -> Settings -> Webhooks.     */
/* This is the reliable source of truth even if the browser closes mid-pay.*/
/* ----------------------------------------------------------------------- */
export async function razorpayWebhook(req, res) {
  try {
    const signature = req.headers["x-razorpay-signature"];
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(req.body) // req.body is a raw Buffer here
      .digest("hex");

    if (expected !== signature) return res.status(400).send("Invalid signature");

    const event = JSON.parse(req.body.toString());

    if (event.event === "payment.captured") {
      const entity = event.payload.payment.entity;
      const order = await Order.findOne({ "payment.razorpayOrderId": entity.order_id });
      
      if (order && order.status !== "paid") {
        order.status = "paid";
        order.payment.razorpayPaymentId = entity.id;
        order.payment.method = entity.method;
        order.payment.signatureVerified = true;
        await order.save();

        for (const item of order.items) {
          await Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.qty } });
        }
      }
    }

    if (event.event === "payment.failed") {
      const entity = event.payload.payment.entity;
      await Order.findOneAndUpdate(
        { "payment.razorpayOrderId": entity.order_id },
        { status: "failed" }
      );
    }

    res.json({ received: true });
  } catch (err) {
    console.error("webhook error:", err);
    res.status(500).send("Webhook handler failed");
  }
}
