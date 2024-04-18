import React, { useState, useEffect } from 'react';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await fetch(`http://localhost:5000/api/product/${editProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                });
                setEditMode(false);
                setEditProductId(null);
            } else {
                await fetch('http://localhost:5000/api/product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                });
            }
            fetchProducts();
            setNewProduct({
                name: '',
                description: '',
                price: 0,
                category: ''
            });
        } catch (error) {
            console.error('Error adding/editing product:', error);
        }
    };

    const handleEdit = (product) => {
        setNewProduct(product);
        setEditMode(true);
        setEditProductId(product._id);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/product/${id}`, {
                method: 'DELETE'
            });
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <h1>add and edit </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    placeholder="Product Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={newProduct.description}
                    placeholder="Product Description"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    placeholder="Price"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    value={newProduct.category}
                    placeholder="Category"
                    onChange={handleChange}
                />
                <button type="submit">{editMode ? 'Edit Product' : 'Add Product'}</button>
            </form>
            <div className="products">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <br/>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
