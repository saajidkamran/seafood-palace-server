import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const reserve = async (req: Request, res: Response) => {
  const {
    user_id,
    customerName,
    guestCount,
    phoneNumber,
    message,
    customerEmail,
  } = req.body;

  // Ensure all required fields are provided
  if (
    !user_id ||
    !customerName ||
    !phoneNumber ||
    guestCount === undefined ||
    !customerEmail
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new reservation with the current date
    const reservation = new Reservation({
      user_id,
      customerName,
      guestCount,
      customerEmail,
      phoneNumber,
      message,
      date: new Date(), // Automatically set the current date
    });

    // Save the reservation to the database
    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
