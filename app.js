import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
    connectDB();
});