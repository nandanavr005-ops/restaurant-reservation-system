const express = require("express");
const router = express.Router();

const {
  createReservation,
  getMyReservations,
  getAllReservations,
  cancelReservation,
} = require("../controllers/reservationController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// User
router.post("/", protect, createReservation);
router.get("/my", protect, getMyReservations);

// Admin
router.get("/", protect, authorize("admin"), getAllReservations);
router.put("/:id/cancel", protect, cancelReservation);
module.exports = router;