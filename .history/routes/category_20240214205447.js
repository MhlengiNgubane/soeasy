const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post("/", categoryController.c);

router.get("/", categoryController.getAllCategories);

router.get("/random", categoryController.getRandomCategories);

module.exports = router;