const router = require('express').Router();
const ratingController = require('../controllers/ratingController');
const {verifyTokenAndAuthorization} = require('..')

router.post("/", verifyTokenAndAuthorization, ratingController.addRating);

router.get("/", ratingController.checkUserRating);

module.exports = router;