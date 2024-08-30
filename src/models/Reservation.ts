import { Schema, model, Document } from "mongoose";

interface IReservation extends Document {
  user_id: string;
  customerName: string;
  guestCount: number;
  customerEmail: string;
  phoneNumber: number;
  message: string;
  toDate: String;
  fromDate: String;
}

const ReservationSchema = new Schema<IReservation>({
  user_id: { type: String, required: true },
  customerName: { type: String, required: true },
  guestCount: { type: Number, required: true },
  customerEmail: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  message: { type: String, required: false },
  toDate: { type: String, required: true },
  fromDate: { type: String, required: true },
});

const Reservation = model<IReservation>("Reservation", ReservationSchema);
export default Reservation;
