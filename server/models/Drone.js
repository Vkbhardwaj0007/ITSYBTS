import mongoose from 'mongoose';

const droneSchema = new mongoose.Schema({
    droneId: { type: String, required: true, unique: true },
    status: { 
        type: String, 
        enum: ['FREE', 'ASSIGNED', 'IN_TRANSIT', 'DELIVERED', 'RETURNING'], 
        default: 'FREE' 
    },
    battery: { type: Number, default: 100 },
    currentLocation: { type: String, default: 'Base Station' }
});

export default mongoose.model('Drone', droneSchema);
