import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🍽 Restaurant Reservation
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/restaurants">
            Restaurants
          </Link>

          <Link className="nav-link" to="/my-reservations">
            My Reservations
          </Link>

          <Link className="nav-link" to="/admin">
            Admin
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;