import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="home-page">
            <h1>Welcome to Our Store</h1>
            <div className="products">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <Link to={`/product/${product._id}`} className="view-details">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
