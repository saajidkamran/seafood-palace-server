import express from "express";
import { connectToMongoDB } from "./DatabseConncetion";
import { reserve } from "./routes/reservation";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectToMongoDB();

// Reservation route
app.post("/reserve", reserve);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
