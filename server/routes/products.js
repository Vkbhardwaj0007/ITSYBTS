import { Router } from "express";
import { Product, Order } from "../models.js";
import { auth } from "../middleware/auth.js";

const router = Router();

/* GET /api/products?category=Mobiles&q=nuvora */
router.get("/", async (req, res) => {
  try {
    const { category, q } = req.query;
    const filter = {};
    if (category && category !== "All") filter.category = category;
    if (q)
      filter.$or = [
        { name: new RegExp(q, "i") },
        { brand: new RegExp(q, "i") },
        { category: new RegExp(q, "i") },
      ];
    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/products/:id */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* POST /api/products */
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* PUT /api/products/:id */
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* DELETE /api/products/:id */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

/* ----------------------- Orders router (separate) ---------------------- */
export const ordersRouter = Router();

/* GET /api/orders  -> logged-in user's orders */
ordersRouter.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/orders/all -> admin get all orders */
ordersRouter.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* POST /api/orders/cod -> Create a COD order */
ordersRouter.post("/cod", async (req, res) => {
  try {
    const { items, address, user } = req.body;
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: "Cart is empty" });

    const ids = items.map(i => i.productId);
    const products = await Product.find({ _id: { $in: ids } });
    const map = Object.fromEntries(products.map(p => [String(p._id), p]));

    let subtotal = 0;
    const lineItems = [];
    for (const i of items) {
      const p = map[String(i.productId)];
      if (!p) continue;
      const qty = Math.max(1, parseInt(i.qty, 10) || 1);
      subtotal += p.price * qty;
      lineItems.push({ product: p._id, name: p.name, price: p.price, qty });
      
      // Deduct stock for COD
      await Product.findByIdAndUpdate(p._id, { $inc: { stock: -qty } });
    }

    const delivery = subtotal > 0 && subtotal < 5000 ? 99 : 0;
    const amount = subtotal + delivery;
    const orderNo = "COD" + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 900 + 100);

    const mongoose = (await import("mongoose")).default;
    
    const order = await Order.create({
      orderNo,
      user: (user && user.id && mongoose.Types.ObjectId.isValid(user.id)) ? user.id : null,
      items: lineItems,
      subtotal,
      delivery,
      amount,
      address,
      status: "paid",
      payment: { method: "cod", signatureVerified: true },
    });

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/orders/phone/:phone */
ordersRouter.get("/phone/:phone", async (req, res) => {
  try {
    const orders = await Order.find({ "address.phone": req.params.phone }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/orders/:id */
ordersRouter.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* PUT /api/orders/:id/stage */
ordersRouter.put("/:id/stage", async (req, res) => {
  try {
    const { stage } = req.body;
    const updateData = { stage };
    if (stage === 4) {
      updateData.deliveredAt = new Date();
    }
    const order = await Order.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ----------------------- Repairs Router ---------------------- */
export const repairsRouter = Router();

/* GET /api/repairs */
repairsRouter.get("/", async (req, res) => {
  try {
    const repairs = await RepairClaim.find().sort({ createdAt: -1 });
    res.json(repairs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* POST /api/repairs */
repairsRouter.post("/", async (req, res) => {
  try {
    const repair = new RepairClaim(req.body);
    await repair.save();
    res.status(201).json(repair);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* PUT /api/repairs/:id */
repairsRouter.put("/:id", async (req, res) => {
  try {
    const repair = await RepairClaim.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!repair) return res.status(404).json({ error: "Repair claim not found" });
    res.json(repair);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* DELETE /api/repairs/:id */
repairsRouter.delete("/:id", async (req, res) => {
  try {
    const repair = await RepairClaim.findByIdAndDelete(req.params.id);
    if (!repair) return res.status(404).json({ error: "Repair claim not found" });
    res.json({ message: "Repair claim deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
