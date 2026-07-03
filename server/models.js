import mongoose from "mongoose";

const { Schema, model } = mongoose;

/* ------------------------------- Product ------------------------------- */
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: String,
    category: { type: String, index: true },
    price: { type: Number, required: true }, // selling price (₹)
    mrp: Number,
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    emoji: String,
    image: String,
    specs: [String],
    stock: { type: Number, default: 100 },
    desc: String,
  },
  { timestamps: true }
);

/* -------------------------------- User --------------------------------- */
const addressSchema = new Schema(
  {
    type: { type: String, default: "Home" },
    name: String,
    phone: String,
    line: String,
    city: String,
    state: String,
    pincode: String,
  },
  { _id: true }
);

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    phone: String,
    addresses: [addressSchema],
  },
  { timestamps: true }
);

/* -------------------------------- Order -------------------------------- */
const orderSchema = new Schema(
  {
    orderNo: { type: String, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "User" }, // optional (guest checkout allowed)
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        qty: Number,
      },
    ],
    subtotal: Number,
    delivery: Number,
    amount: { type: Number, required: true }, // total ₹ (server-computed, never trusted from client)
    address: addressSchema,
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
    payment: {
      razorpayOrderId: String,
      razorpayPaymentId: String,
      method: String,
      signatureVerified: { type: Boolean, default: false },
    },
    // fulfilment stage: 0 Placed, 1 Packed, 2 Shipped, 3 Out for delivery, 4 Delivered
    stage: { type: Number, default: 0 },
    deliveredAt: Date, // Warranty start date
  },
  { timestamps: true }
);

/* ----------------------------- Repair Claim ---------------------------- */
const repairClaimSchema = new Schema(
  {
    orderId: { type: String, required: true },
    customerName: { type: String, required: true },
    phone: String,
    productName: String,
    issue: String,
    status: { type: String, default: "Pending" }, // Pending, Received, Repaired, Dispatched
    complaintDate: { type: Date, default: Date.now },
    receivedAtCompanyDate: Date,
    dispatchedDate: Date,
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
export const User = model("User", userSchema);
export const Order = model("Order", orderSchema);
export const RepairClaim = model("RepairClaim", repairClaimSchema);
