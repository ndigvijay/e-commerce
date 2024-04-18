import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data)
                console.log(data.message); // Log success message
                alert("logged in ")
                localStorage.setItem("userId", data.user._id);
                localStorage.setItem("ShippingAddress", data.user.shippingAddress);
                window.location.href="/"
            } else {
                console.error('Login failed:', response.statusText);
                // Handle failed login, e.g., show error message to user
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error, e.g., show error message to user
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <a href='/signup'>want to signup?</a>
            </form>
        </div>
    );
};

export default Login;
