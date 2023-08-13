import { useSelector } from "react-redux";
import { ADDBOOK, DElETEBOOK } from "../../ActionTypes/BookingTypes";

const initialState = {
    value: []
}
// {
//     from:"", to:"", date:"", guests:"", ticketClass:""
// }

const BookingReducer = (state = initialState, action) => {
    

    switch (action.type) {
        case ADDBOOK:
            return {
                value: [...state.value, action.payload],
            }
        case DElETEBOOK:
            const BookingData = state.value;
            const DeleteAbleData = action.payload;
            const RestOfData = BookingData.filter((AllData) => AllData.id !== DeleteAbleData);
           console.log(RestOfData,"RestOfData")
            return {
                value: RestOfData,
            }
        default:
            return state;
    }

}

export default BookingReducer;