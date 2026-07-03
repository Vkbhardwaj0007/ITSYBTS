import express from 'express';
const router = express.Router();
import Drone from '../models/Drone.js';
import DroneOrder from '../models/DroneOrder.js';
import mongoose from 'mongoose';

// Helper to generate 4-digit OTP
const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// Initialize 10 Drones if they don't exist
const initializeFleet = async () => {
    try {
        // Wait for connection
        if (mongoose.connection.readyState !== 1) {
            setTimeout(initializeFleet, 2000);
            return;
        }
        const count = await Drone.countDocuments();
        if (count === 0) {
            const drones = [];
            for (let i = 1; i <= 10; i++) {
                drones.push({ droneId: `BTS-DRONE-${String(i).padStart(3, '0')}`, status: 'FREE' });
            }
            await Drone.insertMany(drones);
            console.log('✅ Initialized 10 Drones in the Fleet');
        }
    } catch (err) {
        console.error('Failed to initialize fleet:', err.message);
    }
};
initializeFleet();

// GET /api/drones/fleet - Get all drones
router.get('/fleet', async (req, res) => {
    try {
        const drones = await Drone.find().sort({ droneId: 1 });
        res.json(drones);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/drones/orders - Get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await DroneOrder.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/drones/order - Customer places a new order
router.post('/order', async (req, res) => {
    try {
        const { customerName, item, address } = req.body;
        const newOrder = new DroneOrder({ customerName, item, address });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/drones/accept - Admin accepts order, assigns drone, generates OTPs
router.post('/accept', async (req, res) => {
    try {
        const { orderId } = req.body;
        
        // Find a free drone
        const freeDrone = await Drone.findOne({ status: 'FREE' });
        if (!freeDrone) {
            return res.status(400).json({ error: 'No free drones available in the fleet!' });
        }

        const adminOtp = generateOtp();
        const customerOtp = generateOtp();

        const order = await DroneOrder.findByIdAndUpdate(
            orderId, 
            { status: 'ACCEPTED', adminOtp, customerOtp, assignedDroneId: freeDrone.droneId },
            { new: true }
        );

        if (!order) return res.status(404).json({ error: 'Order not found' });

        // Mark drone as ASSIGNED
        freeDrone.status = 'ASSIGNED';
        await freeDrone.save();

        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/drones/dispatch - Admin enters OTP to dispatch
router.post('/dispatch', async (req, res) => {
    try {
        const { orderId, otp } = req.body;
        const order = await DroneOrder.findById(orderId);
        
        if (!order) return res.status(404).json({ error: 'Order not found' });
        if (order.adminOtp !== otp) return res.status(400).json({ error: 'Invalid Admin OTP' });
        if (order.status !== 'ACCEPTED') return res.status(400).json({ error: 'Order is not in ACCEPTED state' });

        order.status = 'DISPATCHED';
        await order.save();

        // Mark drone as IN_TRANSIT
        await Drone.findOneAndUpdate({ droneId: order.assignedDroneId }, { status: 'IN_TRANSIT' });

        res.json({ message: 'Drone dispatched successfully!', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/drones/deliver - Customer enters OTP to receive
router.post('/deliver', async (req, res) => {
    try {
        const { orderId, otp } = req.body;
        const order = await DroneOrder.findById(orderId);
        
        if (!order) return res.status(404).json({ error: 'Order not found' });
        if (order.customerOtp !== otp) return res.status(400).json({ error: 'Invalid Customer OTP' });
        if (order.status !== 'DISPATCHED') return res.status(400).json({ error: 'Drone has not been dispatched yet' });

        order.status = 'DELIVERED';
        await order.save();

        // Mark drone as FREE (simulation simplifies RETURNING to FREE directly)
        await Drone.findOneAndUpdate({ droneId: order.assignedDroneId }, { status: 'FREE' });

        res.json({ message: 'Package Delivered Successfully!', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
