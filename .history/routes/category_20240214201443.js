const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post("/", categoryController.categoryController);

router.get("/", categoryController.getAllCategories);

router