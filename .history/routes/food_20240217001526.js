const router = require('express').Router();
const foodController = require('../controllers/foodController');

router.post("/", foodControllerController.addFood);

router.get("/:code", restaurantController.getRandomRestaurants);

router.get("/all/:code", restaurantController.getAllNearByRestaurants);

router.get("/byId/:id", restaurantController.getRestaurantById);

module.exports = router;