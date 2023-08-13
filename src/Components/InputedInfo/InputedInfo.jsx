
import { toast } from "react-toastify"
import destination from "../../assets/img/icons/Frame.svg"
import guests from "../../assets/img/icons/Vector (1).svg"
import seatClass from "../../assets/img/icons/Vector (3).svg"
import { useDispatch, useSelector } from "react-redux"
import { AddBooking } from "../../Redux/Actions/BookingAction"
import { useRef } from "react"


function InputedInfo() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const BookingData = useSelector((state) => state?.AddBooking?.value);

  const handleSubmitBooking = (event) => {
    event.preventDefault();
    if(BookingData.length>=3){
      return toast.info("You can not book more that 3 per a day!")
    }
    const form = formRef.current;
    const target = event.target;
    const from = target.from?.value;
    const to = target.to?.value;
    const date = target.date.value;
    const guests = target.guests?.value;
    const ticketClass = target.ticketClass?.value;
    const FlighInfo = {id:BookingData.length+1, from, to, date, guests, ticketClass }
    // console.log(FlighInfo,"FlightInfo");
    dispatch(AddBooking(FlighInfo))
    form.reset();
    toast.success("Booking Added Successfully!")
  }

  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form ref={formRef} className="first-hero lws-inputform" onSubmit={handleSubmitBooking}>
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={destination} alt="" />
                <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={destination} alt="" />
                <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={guests} alt="" />
                <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src={seatClass} alt="" />
                <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketclassName" required>
                  <option value="" hidden>Please Select</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button className="addBook bg-green-500" type="submit" id="lws-addBook">
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputedInfo