import { AddBook } from "../ActionTypes/BookingTypes"

export const AddBooking = (value) => {
    return {
        type: AddBook,
        payload: value,
    }
}