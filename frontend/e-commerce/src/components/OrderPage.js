import React, { useState, useEffect } from 'react';
import "../styles/orderPage.css";

const OrderPage = () => {
    const [cart, setCart] = useState({ User: "", ShippingAddress: "", items: [] });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch cart details from the backend when the component mounts
        fetch('http://localhost:5000/api/cart')
            .then(response => response.json())
            .then(data => {
                // Check if data is an array, if not, wrap it in an array
                const items = Array.isArray(data) ? data : [data];
                // Modify cart data with user and shipping address
                const updatedCart = {
                    User: localStorage.getItem("userId"),
                    ShippingAddress: localStorage.getItem("ShippingAddress"),
                    items: items
                };
                console.log(updatedCart)
                setCart(updatedCart);
            })
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    useEffect(() => {
        // Calculate total price when cart changes
        let total = 0;
        if (cart.items) {
            cart.items.forEach(item => {
                total += item.price;
            });
        }
        setTotalPrice(total);
    }, [cart]);

    const handleSubmitOrder = async () => {
        try {
            // If no items in the cart, return without submitting
            if (cart.items.length === 0) {
                console.error('Cart is empty');
                return;
            }
            // Send a POST request to the backend to save the current cart as the order
            const response = await fetch('http://localhost:5000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"orderData":cart})
            });
            if (response.ok) {
                console.log(cart)
                console.log('Order submitted successfully');
                alert("order submitted")
                // Handle successful order submission (e.g., redirect to thank you page)
            } else {
                console.error('Error submitting order');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div  className="order-page" >
            <h1>Order Summary</h1>
            <ul className="order-list">
                {cart.items && cart.items.map(item => (
                    <li key={item.id} className="order-item">
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.description}</li>
                            <li>{item.price}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
            <button onClick={handleSubmitOrder} className="submit-order-btn">Submit Order</button>
        </div>
    );
};

export default OrderPage;
