const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    category: { type: String },
    images: [{ type: String }]
});

module.exports = mongoose.model("Product", productSchema);
