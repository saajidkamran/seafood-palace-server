import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const deleteReservation = async (req: Request, res: Response) => {
  const { id } = req.params; // Reservation ID from URL

  try {
    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json({ message: "Reservation deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
