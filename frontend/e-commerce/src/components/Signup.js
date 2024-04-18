import React, { useState } from 'react';
import '../styles/signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, shippingAddress })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Log success message
                alert("user created")
                window.location.href="/login"
            } else {
                console.error('Signup failed:', response.statusText);
                // Handle failed signup, e.g., show error message to user
            }
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error, e.g., show error message to user
        }
    };

    return (
        <div>
            <form  className="signup-form"onSubmit={handleSubmit}>
                <h2 className='signup-h2'>Sign Up</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Shipping Address" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
