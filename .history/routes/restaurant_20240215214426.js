const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.post("/", restaurantController.addRestaurant);
router.get

module.exports = router;