const express=require("express")
const router =require("./routes/router.js")
const app =express()
const mongoose = require("mongoose");
require("dotenv").config()
const cors =require("cors")

async function connectToMongoDB() {
    try {
        await mongoose.connect("mongodb+srv://ndv005:ndv005@cluster0.cpdeub1.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Exit the process if unable to connect to MongoDB
        process.exit(1);
    }
}

app.use(cors())

app.use(express.json())




connectToMongoDB()
    .then(()=>{
        console.log("mongodb connected")
        app.use("/api",router)

        app.listen(5000,()=>{
            console.log("server is running")
        })
    })
    .catch((error)=>{
        console.log(error)
    })

