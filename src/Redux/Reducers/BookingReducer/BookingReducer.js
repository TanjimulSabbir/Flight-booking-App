import { AddBook } from "../../ActionTypes/BookingTypes";

const initialState = {
    value: []
}
// {
//     from:"", to:"", date:"", guests:"", ticketClass:""
// }

const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddBook:
            return {
                value: [...state.value, action.payload],
            }
        default:
            return state;
    }

}

export default BookingReducer;