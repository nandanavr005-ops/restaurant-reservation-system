import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchRestaurants();
    fetchReservations();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await API.get("/restaurants");
      setRestaurants(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReservations = async () => {
    try {
      const res = await API.get("/reservations");
      setReservations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addRestaurant = async (e) => {
    e.preventDefault();

    try {
      await API.post("/restaurants", {
        name,
        location,
        cuisine,
        description,
      });

      alert("✅ Restaurant Added Successfully!");

      setName("");
      setLocation("");
      setCuisine("");
      setDescription("");

      fetchRestaurants();
    } catch (error) {
      alert("Unable to add restaurant");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">👨‍💼 Admin Dashboard</h1>

      {/* Add Restaurant */}
      <div className="card shadow mb-5">
        <div className="card-body">
          <h3 className="mb-4">➕ Add Restaurant</h3>

          <form onSubmit={addRestaurant}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Restaurant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button className="btn btn-success w-100" type="submit">
              Add Restaurant
            </button>
          </form>
        </div>
      </div>

      {/* Restaurants */}
      <h2 className="mb-3">🍽 Restaurants</h2>

      <div className="row">
        {restaurants.map((restaurant) => (
          <div className="col-md-4 mb-4" key={restaurant._id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{restaurant.name}</h5>

                <p>
                  <strong>📍</strong> {restaurant.location}
                </p>

                <p>
                  <strong>🍛</strong> {restaurant.cuisine}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      {/* Reservations */}
      <h2 className="mb-3">📅 All Reservations</h2>

      {reservations.length === 0 ? (
        <div className="alert alert-info">
          No reservations found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            <thead className="table-dark">
              <tr>
                <th>Restaurant</th>
                <th>User</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation.restaurant.name}</td>
                  <td>{reservation.user.name}</td>
                  <td>
                    {new Date(reservation.date).toLocaleDateString()}
                  </td>
                  <td>{reservation.guests}</td>
                  <td>
                    <span
                      className={`badge ${
                        reservation.status === "Cancelled"
                          ? "bg-danger"
                          : "bg-success"
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;