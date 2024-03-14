const router = require('express').Router();
const ratingController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, cartController.aa);

router.get("/",verifyTokenAndAuthorization, cartController.checkUserRating);

module.exports = router;