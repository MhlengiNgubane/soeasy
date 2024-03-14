const router = require('express').Router();
const ratingController = require('../controllers/ratingController');

router.post("/", .createCategory);

router.get("/", categoryController.getAllCategories);

router.get("/random", categoryController.getRandomCategories);

module.exports = router;