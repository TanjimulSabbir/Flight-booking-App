import { ADDBOOK, DElETEBOOK } from "../ActionTypes/BookingTypes"

export const AddBooking = (value) => {
    return {
        type: ADDBOOK,
        payload: value,
    }
}

export const BookingDeleteAction = (value) => {
    return {
        type: DElETEBOOK,
        payload: value,
    }

}