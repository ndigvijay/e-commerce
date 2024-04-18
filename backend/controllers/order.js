const Order = require("../models/orderModel");

// Place Order
const placeOrder = async (req, res) => {
    try {
        const {orderData} = req.body;
        // const {orderData.User}=req.body
        console.log(orderData)
        const User=orderData.User
        const shippingAddress=orderData.ShippingAddress
        console.log(User,shippingAddress)
        userOrder=new Order()
        userOrder.User=User
        userOrder.shippingAddress=shippingAddress
        
        await userOrder.save();
        res.status(201).json(Order);
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get Order by ID
const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error("Error getting order by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get All Orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error getting all orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update Order Status
const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete Order
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { placeOrder, getOrderById, getAllOrders, updateOrderStatus, deleteOrder };
