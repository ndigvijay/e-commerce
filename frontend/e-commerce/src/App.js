import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductViewPage from './components/ProductViewPage';
import AdminDashboard from './components/AdminDashboard';
import CartPage from './components/CartPage';
import OrderPage from './components/OrderPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductViewPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order/:id" element={<OrderPage />} />
            </Routes>
        </Router>
    );
};

export default App;
