const router = require('express').Router();
const foodController = require('../controllers/foodController');

router.post("/", foodController.addFood);

router.get("/:id", foodController.getFoodById);
router.get("/random:code", foodController.getRandomFood);
router.get("/search/:search", foodController.getFoodsByRestaurants);

router.get("/restaurant-foods/:id", foodController.getFoodsByRestaurants);

router.get("/restaurant-foods/:id", foodController.getFoodsByRestaurants);

module.exports = router;