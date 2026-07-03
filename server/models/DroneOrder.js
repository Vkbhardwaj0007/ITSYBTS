import mongoose from 'mongoose';

const droneOrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    item: { type: String, required: true },
    address: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['PENDING', 'ACCEPTED', 'DISPATCHED', 'DELIVERED'], 
        default: 'PENDING' 
    },
    adminOtp: { type: String },
    customerOtp: { type: String },
    assignedDroneId: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('DroneOrder', droneOrderSchema);
