import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import MyReservations from "./pages/MyReservations";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/restaurants" element={<Restaurants />} />

      <Route path="/my-reservations" element={<MyReservations />} />

      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;