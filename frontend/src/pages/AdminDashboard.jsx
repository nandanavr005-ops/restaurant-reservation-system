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
    const res = await API.get("/restaurants");
    setRestaurants(res.data);
  };

  const fetchReservations = async () => {
    const res = await API.get("/reservations");
    setReservations(res.data);
  };

  const addRestaurant = async (e) => {
    e.preventDefault();

    await API.post("/restaurants", {
      name,
      location,
      cuisine,
      description,
    });

    alert("Restaurant Added!");

    setName("");
    setLocation("");
    setCuisine("");
    setDescription("");

    fetchRestaurants();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Add Restaurant</h2>

      <form onSubmit={addRestaurant}>
        <input
          placeholder="Restaurant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Restaurant
        </button>
      </form>

      <hr />

      <h2>Restaurants</h2>

      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          🍽 {restaurant.name}
        </div>
      ))}

      <hr />

      <h2>Reservations</h2>

      {reservations.map((reservation) => (
        <div key={reservation._id}>
          🍽 {reservation.restaurant.name} —
          👤 {reservation.user.name}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;