import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            🍽 Restaurant Reservation System
          </h1>

          <p className="lead mt-3">
            Reserve your favorite restaurant in just a few clicks.
          </p>

          <Link to="/restaurants" className="btn btn-warning btn-lg mt-3">
            Browse Restaurants
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Why Choose Us?</h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>🍽</h3>
                <h5>Top Restaurants</h5>
                <p>Explore and reserve tables at amazing restaurants.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>⚡</h3>
                <h5>Instant Booking</h5>
                <p>Book your table instantly without waiting.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>⭐</h3>
                <h5>Easy Management</h5>
                <p>Manage your reservations anytime.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-1">
          🍴 Restaurant Reservation System
        </p>

        <small>
          Built with React • Node.js • Express • MongoDB
        </small>
      </footer>
    </>
  );
}

export default Home;