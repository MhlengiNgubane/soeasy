const router = require('express').Router();
const ratingController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, cartController.addRating);

router.get("/",verifyTokenAndAuthorization, ratingController.checkUserRating);

module.exports = router;