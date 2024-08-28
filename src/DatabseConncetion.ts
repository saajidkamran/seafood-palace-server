import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};
