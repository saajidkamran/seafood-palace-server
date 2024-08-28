import { Schema, model, Document } from 'mongoose';

interface IReservation extends Document {
    user_id: string;
    reserved_tokens: number;
    left_tokens: number;
}

const ReservationSchema = new Schema<IReservation>({
    user_id: { type: String, required: true },
    reserved_tokens: { type: Number, required: true },
    left_tokens: { type: Number, required: true }
});

const Reservation = model<IReservation>('Reservation', ReservationSchema);
export default Reservation;
