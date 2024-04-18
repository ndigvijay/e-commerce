import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productViewPage.css';

const ProductViewPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const handleAddToCart = async (name,description,price) => {
        try {
            const product={'newItem':{name,description,price}}
            const response = await fetch(`http://localhost:5000/api/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (response.ok) {
                console.log('Product added to cart:', product);
                alert("added to cart")
                // You might want to redirect the user to the cart page or show a confirmation message here
            } else {
                console.error('Failed to add product to cart');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div className="product-view-page">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={()=>handleAddToCart(product.name,product.description,product.price)}>Add to Cart</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductViewPage;
