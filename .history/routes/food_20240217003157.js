const router = require('express').Router();
const foodController = require('../controllers/foodController');

router.post("/", foodController.addFood);

router.get("/:id", foodController.getFoodById);

router.get("/recommendation", foodController.getRandomFood);

router.get("/restaurant-foods", foodController.getFoodsByRestaurants);

router.get("/restaurant-foods/:id", foodController.getFoodsByRestaurants);

module.exports = router;