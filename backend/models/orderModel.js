// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    status: { type: String, default: "pending" } // Can be "pending", "shipped", "delivered", etc.
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
