const router = require('express').Router();
const ratingController = require('../controllers/ratingController');

router.post("/", ratingController.addRating);

router.get("/", ratingController.getAllCategories);

router.get("/random", categoryController.getRandomCategories);

module.exports = router;