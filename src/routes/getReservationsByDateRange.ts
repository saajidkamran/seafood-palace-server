import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const getReservationsByDateRange = async (
  req: Request,
  res: Response
) => {
  // Extract start and end dates from the request body
  const { startDate, endDate } = req.body;

  // Validate date parameters
  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ message: "Start date and end date are required" });
  }

  // Convert dates to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Ensure the start date is before the end date
  if (start > end) {
    return res
      .status(400)
      .json({ message: "Start date cannot be after end date" });
  }

  try {
    // Retrieve reservations within the specified date range
    const reservations = await Reservation.find({
      date: {
        $gte: start, // Greater than or equal to start date
        $lte: end, // Less than or equal to end date
      },
    });

    if (!reservations.length) {
      return res
        .status(404)
        .json({ message: "No reservations found for the given date range" });
    }

    res.json(reservations);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
