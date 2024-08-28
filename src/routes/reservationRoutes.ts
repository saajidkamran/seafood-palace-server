import { Router } from "express";
import { createReservation } from "./createReservation";
import { updateReservation } from "./updateReservation";
import { deleteReservation } from "./deleteReservation";
import { getAllReservations } from "./getAllReservations";
import { getReservationsByDateRange } from "./getReservationsByDateRange";

const router = Router();

// Define routes
router.post("/", createReservation); // Create reservation
router.put("/:id", updateReservation); // Update reservation by ID
router.delete("/:id", deleteReservation); // Delete reservation by ID
router.get("/", getAllReservations); // Get all reservations
router.post("/summary", getReservationsByDateRange); // Get reservations by date range

export default router;
