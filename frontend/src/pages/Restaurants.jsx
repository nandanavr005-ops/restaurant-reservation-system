import { useEffect, useState } from "react";
import API from "../services/api";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await API.get("/restaurants");
      setRestaurants(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Restaurants</h1>

      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "15px 0",
              borderRadius: "8px",
            }}
          >
            <h2>{restaurant.name}</h2>

            <p>
              <strong>Location:</strong> {restaurant.location}
            </p>

            <p>
              <strong>Cuisine:</strong> {restaurant.cuisine}
            </p>

            <p>{restaurant.description}</p>
            <button
  onClick={() => {
    window.location.href = `/book/${restaurant._id}`;
  }}
>
  Book Now
</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Restaurants;