const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.post("/", restaurantController.addRestaurant)

module.exports = router;