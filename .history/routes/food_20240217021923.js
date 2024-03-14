const router = require('express').Router();
const foodController = require('../controllers/foodController');

router.post("/", foodController.addFood);

router.get("/recommendation/:code", foodController.getRandomFood);

router.get("/:id", foodController.getFoodById);

router.get("/search/:search", foodController.searchFoods);

router.get("/:category/:code", foodController.getFoodsByCategoryAndCode);




module.exports = router;