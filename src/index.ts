import express from "express";
import mongoose from "mongoose";
import { connectToMongoDB } from "./DatabaseConnection";
import { reserve } from "./routes/reservation";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
connectToMongoDB();

// Reservation route
app.post("/reserve", reserve);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
