import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const updateReservation = async (req: Request, res: Response) => {
  const { id } = req.params; // Reservation ID from URL
  const {
    customerName,
    guestCount,
    customerEmail,
    phoneNumber,
    message,
    fromDate,
    toDate,
  } = req.body;

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      {
        customerName,
        guestCount,
        customerEmail,
        phoneNumber,
        message,
        fromDate,
        toDate,
      },
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json(updatedReservation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
