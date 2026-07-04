const Restaurant = require("../models/restaurant");

// Create Restaurant
const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);

    res.status(201).json({
      message: "Restaurant created successfully",
      restaurant,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json(restaurants);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Restaurant
const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Restaurant updated successfully",
      restaurant: updatedRestaurant,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Delete Restaurant
const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    await restaurant.deleteOne();

    res.status(200).json({
      message: "Restaurant deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};