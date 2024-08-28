import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const createReservation = async (req: Request, res: Response) => {
  const {
    user_id,
    customerName,
    guestCount,
    customerEmail,
    phoneNumber,
    message,
  } = req.body;

  // Ensure all required fields are provided
  if (
    !user_id ||
    !customerName ||
    guestCount === undefined ||
    !customerEmail ||
    phoneNumber === undefined
  ) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided" });
  }

  try {
    const reservation = new Reservation({
      user_id,
      customerName,
      guestCount,
      customerEmail,
      phoneNumber,
      message,
      date: new Date(), // Automatically set the current date
    });

    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
