import { useEffect, useState } from "react";
import API from "../services/api";

function MyReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const res = await API.get("/reservations/my");
      setReservations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelReservation = async (id) => {
    try {
      await API.put(`/reservations/${id}/cancel`);

      alert("Reservation Cancelled!");

      fetchReservations();
    } catch (error) {
      alert("Unable to cancel reservation");
    }
  };

  return (
   <div className="container mt-5">
      <h1>My Reservations</h1>

      {reservations.length === 0 ? (
        <p>No Reservations Found</p>
      ) : (
        reservations.map((reservation) => (
          <div className="card shadow mb-4" key={reservation._id}>
  <div className="card-body">

    <h4 className="card-title">
      🍽 {reservation.restaurant.name}
    </h4>

    <p>
      <strong>📅 Date:</strong>{" "}
      {new Date(reservation.date).toLocaleDateString()}
    </p>

    <p>
      <strong>🕒 Time:</strong> {reservation.time}
    </p>

    <p>
      <strong>👥 Guests:</strong> {reservation.guests}
    </p>

    <p>
      <strong>Status:</strong>{" "}
      <span
        className={`badge ${
          reservation.status === "Cancelled"
            ? "bg-danger"
            : "bg-success"
        }`}
      >
        {reservation.status}
      </span>
    </p>

    {reservation.status !== "Cancelled" && (
      <button
        className="btn btn-danger"
        onClick={() => cancelReservation(reservation._id)}
      >
        Cancel Reservation
      </button>
    )}

  </div>
</div>
        ))
      )}
    </div>
  );
}

export default MyReservations;