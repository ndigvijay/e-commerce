const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    items: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    shippingAddress: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    }

});

module.exports = mongoose.model("Order", orderSchema);
