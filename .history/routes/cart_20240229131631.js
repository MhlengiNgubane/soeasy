const router = require('express').Router();
const cartController = require('../controllers/cartController');
const ratingController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, cartController.addProductToCart);

router.get("/decrement",verifyTokenAndAuthorization, cartController.decrementProductQty);

router.delete("/decrement",verifyTokenAndAuthorization, cartController.decrementProductQty);

module.exports = router;