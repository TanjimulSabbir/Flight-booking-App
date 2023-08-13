import { AddBook } from "../../ActionTypes/BookingTypes";

const initialState = {
    value: {
        from: "",
        to: "",
        date: "",
        seatNumber: "",
        seatType: ""
    }
}

const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddBook:
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }

}

export default BookingReducer;