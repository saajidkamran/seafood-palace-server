import express from "express";
import { connectToMongoDB } from "./DatabaseConnection";
import reservationRoutes from "./routes/reservationRoutes";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
connectToMongoDB();

// Use reservation routes
app.use("/reserve", reservationRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
