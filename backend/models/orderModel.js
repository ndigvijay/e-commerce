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
        // required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // required:true
    }

});

module.exports = mongoose.model("Order", orderSchema);
