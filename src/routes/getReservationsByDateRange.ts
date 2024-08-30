import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const getReservationsByDateRange = async (
  req: Request,
  res: Response
) => {
  try {
    const { fromDate, toDate } = req.body;

    if (!fromDate || !toDate) {
      return res
        .status(400)
        .json({ message: "fromDate and toDate are required" });
    }

    const from = new Date(fromDate as string);
    const to = new Date(toDate as string);

    // Ensure toDate is the end of the day to include the entire day in the search range
    to.setUTCHours(23, 59, 59, 999);

    // Convert string dates in MongoDB to Date objects for comparison
    const reservations = await Reservation.find({
      $or: [
        {
          fromDate: { $lte: to.toISOString() },
          toDate: { $gte: from.toISOString() },
        },
        { fromDate: { $gte: from.toISOString(), $lte: to.toISOString() } },
        { toDate: { $gte: from.toISOString(), $lte: to.toISOString() } },
      ],
    });

    if (reservations.length === 0) {
      return res
        .status(404)
        .json({ message: "No reservations found within the given date range" });
    }

    return res.status(200).json(reservations);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
