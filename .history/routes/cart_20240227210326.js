const router = require('express').Router();
const ratingController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, cartControlle);

router.get("/",verifyTokenAndAuthorization, cartController.checkUserRating);

module.exports = router;