import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
import mongoose from "mongoose";
import { Product } from "./models.js";

const PRODUCTS = [
  { name: "Smart Pump Controller", brand: "ITSYBTS", category: "Home Automation", price: 3499, mrp: 4999, rating: 4.8, reviews: 312, emoji: "💧", image: "/images/smart_pump.png", specs: ["Wi-Fi Enabled", "Auto ON/OFF", "Mobile App Control", "Water Level Sensor"], desc: "Smart water pump controller with remote mobile app control." },
  { name: "Security Alarm System", brand: "ITSYBTS", category: "Security", price: 4999, mrp: 6999, rating: 4.7, reviews: 874, emoji: "🚨", image: "/images/security_alarm.jpg", specs: ["Motion Detection", "GSM Alerts", "110dB Siren", "Battery Backup"], desc: "Advanced security alarm system for home and office with GSM alerts." },
  { name: "Solar Panel Cleaner", brand: "ITSYBTS", category: "Industrial", price: 14999, mrp: 18999, rating: 4.9, reviews: 221, emoji: "☀️", image: "/images/solar_cleaner.png", specs: ["Automated Cleaning", "Waterless Tech", "IoT Monitoring", "Self-Powered"], desc: "Automated robotic cleaner for solar panels." },
  { name: "Home Automation Controller", brand: "ITSYBTS", category: "Home Automation", price: 8999, mrp: 11999, rating: 4.6, reviews: 540, emoji: "🏠", image: "/images/home_controller.jpg", specs: ["Voice Control", "Smart Lighting", "Schedule Timers", "Energy Monitoring"], desc: "Centralized hub for all your smart home devices." },
  { name: "Smart Street Light", brand: "ITSYBTS", category: "Industrial", price: 12499, mrp: 15999, rating: 4.5, reviews: 153, emoji: "💡", image: "/images/street_light.jpg", specs: ["Auto Dimming", "Lux Sensor", "Cloud Monitoring", "Weatherproof"], desc: "Energy-efficient smart street light with IoT monitoring." },
  { name: "GSM Power Failure Alarm", brand: "ITSYBTS", category: "Security", price: 2499, mrp: 3499, rating: 4.7, reviews: 610, emoji: "⚡", image: "/images/gsm_power.jpg", specs: ["SMS Alerts", "Call Alerts", "Inbuilt Battery", "Plug & Play"], desc: "Instant SMS/Call alerts during power failure." },
  { name: "LED Bulb Manufacturing Kit", brand: "ITSYBTS", category: "Industrial", price: 45000, mrp: 55000, rating: 4.9, reviews: 120, emoji: "🛠️", image: "/images/led_bulb_manufacturing.png", specs: ["Complete Setup", "Training Provided", "High Yield", "Raw Materials Included"], desc: "Complete toolkit and machinery for LED bulb manufacturing." }
];

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Product.deleteMany({});
  const docs = await Product.insertMany(PRODUCTS);
  console.log(`✓ Seeded ${docs.length} products`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
