let cartItems = [];

const addToCart = (req, res) => {
    const {newItem} = req.body
    const randomNumber = Math.random();
    newItem.id=randomNumber
    cartItems.push(newItem);
    res.status(201).json({ message: 'Item added to cart successfully' });
};

const getCart = (req, res) => {
    res.status(200).json(cartItems);
};

const clearCart = (req, res) => {
    cartItems = [];
    res.status(200).json({ message: 'Cart cleared successfully' });
};

module.exports = { addToCart, getCart, clearCart };
