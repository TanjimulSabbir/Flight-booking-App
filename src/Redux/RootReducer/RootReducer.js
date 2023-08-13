import { combineReducers } from "redux";
import BookingReducer from "../Reducers/BookingReducer/BookingReducer";

const rootReducer = combineReducers({ AddBooking: BookingReducer })

export default rootReducer;