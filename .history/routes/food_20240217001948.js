const router = require('express').Router();
const foodController = require('../controllers/foodController');

router.post("/", foodController.addFood);

router.get("/:id", foodController.getFoodById);

router.get("/recommendation", foodController.g);

router.get("/byId/:id", restaurantController.getRestaurantById);

module.exports = router;