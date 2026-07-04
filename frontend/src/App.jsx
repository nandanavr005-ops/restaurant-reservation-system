import { Routes, Route } from "react-router-dom";
import BookReservation from "./pages/BookReservation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import MyReservations from "./pages/MyReservations";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/restaurants" element={<Restaurants />} />

      <Route path="/my-reservations" element={<MyReservations />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/book/:id" element={<BookReservation />} />
    </Routes>
     </>
  );
}

export default App;