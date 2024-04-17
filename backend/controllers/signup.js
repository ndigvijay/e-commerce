const userTemplate=require("../models/userModel.js")


const userSignup = async (req, res) => {
    const { name, email, password, shippingAddress } = req.body;
    try {
        const user = new userTemplate({ name, email, password, shippingAddress });
        
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error signing up user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};




module.exports=userSignup