import express from "express";
import { connectToMongoDB } from "./DatabaseConnection";
import reservationRoutes from "./routes/reservationRoutes";
import cors from "cors";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
// Configure CORS
app.use(cors()); // Allow all origins
// Connect to MongoDB
connectToMongoDB();

// Use reservation routes
app.use("/reserve", reservationRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
