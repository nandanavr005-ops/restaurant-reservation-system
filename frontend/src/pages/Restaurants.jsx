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
  <div className="container mt-5">
    <h1 className="text-center mb-4">🍽 Restaurants</h1>

    <div className="row">
      {restaurants.length === 0 ? (
        <p className="text-center">No restaurants found.</p>
      ) : (
        restaurants.map((restaurant) => (
          <div className="col-md-4 mb-4" key={restaurant._id}>
            <div className="card shadow h-100">
              <div className="card-body">

                <h3 className="card-title">
                  {restaurant.name}
                </h3>

                <p>
                  <strong>📍 Location:</strong>{" "}
                  {restaurant.location}
                </p>

                <p>
                  <strong>🍛 Cuisine:</strong>{" "}
                  {restaurant.cuisine}
                </p>

                <p>{restaurant.description}</p>

              </div>

              <div className="card-footer bg-white border-0">

                <button
                  className="btn btn-primary w-100"
                  onClick={() =>
                    (window.location.href = `/book/${restaurant._id}`)
                  }
                >
                  Book Now
                </button>

              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);
}

export default Restaurants;