import { AddBook } from "../ActionTypes/BookingTypes"

export const AddBooking = (value) => {
    return {
        type: AddBook,
        payload: {
            from: value.from, to: value.to,
            date: value.date, seatNumber: value.seatNumber, seatType: value.seatType
        }
    }
}