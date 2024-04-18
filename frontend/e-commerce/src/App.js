import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductViewPage from './components/ProductViewPage';
import AdminDashboard from './components/AdminDashboard';
import OrderPage from './components/OrderPage';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductViewPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </Router>
    );
};

export default App;
