const Reservation = require("../models/Reservation");

// Book a Reservation
const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Reservation booked successfully",
      reservation,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// View Logged-in User Reservations
const getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({
      user: req.user.id,
    }).populate("restaurant");

    res.status(200).json(reservations);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Admin - View All Reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("user")
      .populate("restaurant");

    res.status(200).json(reservations);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Cancel Reservation
const cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        message: "Reservation not found",
      });
    }

    // Only the reservation owner or an admin can cancel
    if (
      reservation.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    reservation.status = "Cancelled";
    await reservation.save();

    res.status(200).json({
      message: "Reservation cancelled successfully",
      reservation,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createReservation,
  getMyReservations,
  getAllReservations,
  cancelReservation,
};