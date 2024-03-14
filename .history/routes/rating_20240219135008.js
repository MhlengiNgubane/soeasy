const router = require('express').Router();
const ratingController = require('../controllers/ratingController');

router.post("/", ratingController.addRating);

router.get("/", ratingController.ch);

module.exports = router;