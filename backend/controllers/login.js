const User = require("../models/userModel");

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // If login successful
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = userLogin;
