import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";

dotenv.config();

const app=express();

app.use(cors());

app.use(postRoutes)

app.use(express.json());

const start = async()=>{
    const connectDB=await mongoose.connect("");

    app.listen(9080,()=>{
        console.log("Server is working at port 9080")
    })
}

start();
