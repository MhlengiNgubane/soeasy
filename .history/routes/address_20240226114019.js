const router = require('express').Router();
const addressController = require('../controllers/addressController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/", verifyTokenAndAuthorization, addressController.addAddress);

router.get()

module.exports = router;