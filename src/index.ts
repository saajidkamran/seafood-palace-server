import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Reservation from "./models/Reservation";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Reservation route
app.post("/reserve", async (req: Request, res: Response) => {
  const { user_id, reserved_tokens, left_tokens } = req.body;

  try {
    const reservation = new Reservation({
      user_id,
      reserved_tokens,
      left_tokens,
    });

    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
