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

    return (
        <div className="product-view-page">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    {/* Add more details */}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductViewPage;
