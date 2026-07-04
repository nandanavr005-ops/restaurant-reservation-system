import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function BookReservation() {
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await API.post("/reservations", {
        restaurant: id,
        date,
        time,
        guests,
      });

      alert("Reservation Successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Book Reservation</h1>

      <form onSubmit={handleBooking}>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Confirm Booking
        </button>

      </form>
    </div>
  );
}

export default BookReservation;