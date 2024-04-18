const express = require("express");
const userSignup = require("../controllers/signup.js");
const userLogin = require("../controllers/login.js");
const {
    placeOrder,
    getOrderById,
    getAllOrders,
    updateOrderStatus,
    deleteOrder
} = require("../controllers/order.js");
const {
    addProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require("../controllers/product.js");

const {
    addToCart,
    getCart,
    clearCart
} = require("../controllers/cart.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ "message": "Welcome to the backend" });
});

// User routes
router.post("/user/signup", userSignup);
router.post("/user/login", userLogin);

// Product routes
router.post("/product", addProduct);
router.get("/product/:id", getProductById);
router.get("/products", getAllProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

// Order routes
router.post("/order", placeOrder);
router.get("/order/:id", getOrderById);
router.get("/orders", getAllOrders);
router.put("/order/:id", updateOrderStatus);
router.delete("/order/:id", deleteOrder);


// Cart routes
router.post("/cart/add", addToCart);
router.get("/cart", getCart);
router.delete("/cart/clear", clearCart);


module.exports = router;
