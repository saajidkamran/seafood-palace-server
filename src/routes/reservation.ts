import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const reserve = async (req: Request, res: Response) => {
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
};
