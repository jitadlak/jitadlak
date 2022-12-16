import mongoose from "mongoose";

const serviceorderSchema = mongoose.Schema({
    userId: {
        type: Object,
        required: true,
    },
    serviceSubcategoryId: {
        type: Array,
        required: true,
    },
    serviceDate: {
        type: String,
        required: true,
    },
    serviceTime: {
        type: String,
        required: true,
    },
    serviceSlot: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    serviceStatus: {
        type: String,
        required: false,
    },
    serviceStatus: {
        type: String,
        required: false,
    },
    serviceAmount: {
        type: String,
        required: false,
    },

    id: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("serviceorder", serviceorderSchema);
