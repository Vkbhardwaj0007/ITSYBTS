import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models.js";

const router = Router();

const sign = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

const publicUser = (u) => ({
  id: u._id,
  name: u.name,
  email: u.email,
  phone: u.phone,
  addresses: u.addresses,
});

/* POST /api/auth/register */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "name, email and password are required" });

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash, phone });
    res.status(201).json({ token: sign(user), user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* POST /api/auth/login */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: (email || "").toLowerCase() });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid email or password" });

    res.json({ token: sign(user), user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
