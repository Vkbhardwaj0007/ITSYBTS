import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import productRoutes, { ordersRouter, repairsRouter } from "./routes/products.js";
import paymentRoutes, { razorpayWebhook } from "./routes/payment.js";
import droneRoutes from "./routes/drones.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));

// IMPORTANT: the webhook needs the RAW body for signature verification,
// so it must be registered BEFORE express.json().
app.post(
  "/api/payment/webhook",
  express.raw({ type: "application/json" }),
  razorpayWebhook
);

// JSON parsing for everything else
app.use(express.json());

app.get("/", (_req, res) => res.json({ ok: true, service: "VoltMart API" }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRouter);
app.use("/api/repairs", repairsRouter);
app.use("/api/payment", paymentRoutes);
app.use("/api/drones", droneRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✓ MongoDB connected");
    app.listen(PORT, () => console.log(`✓ VoltMart API on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("✗ MongoDB connection failed:", err.message);
    process.exit(1);
  });
