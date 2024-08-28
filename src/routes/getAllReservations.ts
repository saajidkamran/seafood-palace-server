import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const getAllReservations = async (req: Request, res: Response) => {
  try {
    // Retrieve all reservations from the database
    const reservations = await Reservation.find();

    if (!reservations.length) {
      return res.status(404).json({ message: "No reservations found" });
    }

    res.json(reservations);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
