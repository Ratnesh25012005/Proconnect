import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());
app.use(postRoutes)
app.use(userRoutes)
app.use(express.static("uploads"))

const start = async()=>{
    const connectDB=await mongoose.connect("mongodb+srv://r35452620_db_user:9XUzTFY0T2eFcvwD@linkedinclone.svloa5p.mongodb.net/?appName=linkedinClone");

    app.listen(9080,()=>{
        console.log("Server is working at port 9080")
    })
}

start();
