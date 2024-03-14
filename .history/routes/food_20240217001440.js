const router = require('express').Router();
const Controller = require('../controllers/foodController');

router.post("/", restaurantController.addRestaurant);

router.get("/:code", restaurantController.getRandomRestaurants);

router.get("/all/:code", restaurantController.getAllNearByRestaurants);

router.get("/byId/:id", restaurantController.getRestaurantById);

module.exports = router;