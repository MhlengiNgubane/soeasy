const router = require('express').Router();
const ratingController = require('../controllers/categoryController');

router.post("/", categoryController.createCategory);

router.get("/", categoryController.getAllCategories);

router.get("/random", categoryController.getRandomCategories);

module.exports = router;