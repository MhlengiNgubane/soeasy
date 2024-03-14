const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.post("/", restaurantController.addRestaurant);
router.get("/:code", res)

module.exports = router;