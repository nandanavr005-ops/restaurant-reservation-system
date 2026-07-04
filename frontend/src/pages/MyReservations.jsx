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
    <div style={{ padding: "30px" }}>
      <h1>My Reservations</h1>

      {reservations.length === 0 ? (
        <p>No Reservations Found</p>
      ) : (
        reservations.map((reservation) => (
          <div
            key={reservation._id}
            style={{
              border: "1px solid gray",
              margin: "20px 0",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{reservation.restaurant.name}</h2>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(reservation.date).toLocaleDateString()}
            </p>

            <p>
              <strong>Time:</strong> {reservation.time}
            </p>

            <p>
              <strong>Guests:</strong> {reservation.guests}
            </p>

            <p>
              <strong>Status:</strong> {reservation.status}
            </p>

            {reservation.status !== "Cancelled" && (
              <button
                onClick={() => cancelReservation(reservation._id)}
              >
                Cancel Reservation
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default MyReservations;