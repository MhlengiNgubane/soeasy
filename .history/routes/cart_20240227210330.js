const router = require('express').Router();
const cartController = require('../controllers/cartController');
const ratingController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, cartController.);

router.get("/",verifyTokenAndAuthorization, cartController.checkUserRating);

module.exports = router;