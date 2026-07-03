const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Admin Only
router.post("/", protect, authorize("admin"), createRestaurant);

// Anyone Logged In
router.get("/", protect, getRestaurants);
router.put("/:id", protect, authorize("admin"), updateRestaurant);

router.delete("/:id", protect, authorize("admin"), deleteRestaurant);

module.exports = router;