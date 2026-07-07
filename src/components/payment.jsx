import { useState } from "react";
import { loadRazorpay } from "../loadRazorpay";
import { api } from "../api";

/**
 * payNow — runs the complete real payment flow:
 *   1. ask backend to create a Razorpay order (amount is computed server-side)
 *   2. open the Razorpay checkout popup
 *   3. on success, verify the signature on the backend
 *
 * @param {Object}   args
 * @param {Array}    args.items     [{ productId, qty }]
 * @param {Object}   args.address   delivery address
 * @param {Object}   args.user      { name, email, phone } for prefill (optional)
 * @param {Function} args.onSuccess called with the verified order
 * @param {Function} args.onFailure called with an Error / reason
 */
export async function payNow({ items, address, user = {}, onSuccess, onFailure }) {
  const sdkOk = await loadRazorpay();
  if (!sdkOk) return onFailure?.(new Error("Could not load Razorpay. Check your connection."));

  let created;
  try {
    created = await api.createOrder({ items, address });
  } catch (err) {
    return onFailure?.(err);
  }

  const rzp = new window.Razorpay({
    key: created.keyId,
    amount: created.amount, // in paise, from the server
    currency: created.currency,
    name: "VoltMart",
    description: "Order payment",
    order_id: created.razorpayOrderId,
    prefill: {
      name: user.name || address?.name || "",
      email: user.email || "",
      contact: user.phone || address?.phone || "",
    },
    theme: { color: "#4F46E5" },
    handler: async (response) => {
      // response: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
      try {
        const result = await api.verifyPayment({
          orderId: created.orderId,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });
        onSuccess?.(result.order);
      } catch (err) {
        onFailure?.(err);
      }
    },
    modal: {
      ondismiss: () => onFailure?.(new Error("Payment cancelled")),
    },
  });

  rzp.on("payment.failed", (resp) => onFailure?.(new Error(resp.error?.description || "Payment failed")));
  rzp.open();
}

/* ----------------------------------------------------------------------- */
/* Example usage — wire this into your VoltMart checkout button.           */
/* Replace the simulated PaymentFlow with a call to payNow().              */
/* ----------------------------------------------------------------------- */
export function PayButton({ cart, address, user }) {
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    payNow({
      // cart items must carry the real Mongo _id from /api/products as productId
      items: cart.map((c) => ({ productId: c.id, qty: c.qty })),
      address,
      user,
      onSuccess: (order) => {
        setLoading(false);
        // navigate to your orders / tracking screen
        alert(`Payment successful! Order ${order.orderNo}`);
      },
      onFailure: (err) => {
        setLoading(false);
        alert(err.message);
      },
    });
  };

  return (
    <button onClick={handlePay} disabled={loading}>
      {loading ? "Processing…" : "Pay now"}
    </button>
  );
}
