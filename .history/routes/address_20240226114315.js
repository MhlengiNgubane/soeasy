const router = require('express').Router();
const addressController = require('../controllers/addressController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/", verifyTokenAndAuthorization, addressController.addAddress);

router.get("/default", verifyTokenAndAuthorization, addressController.getDefaultAddress);

router.delete("/:id", verifyTokenAndAuthorization, addressController.deleteAddress);

router.get("/default/:id", verifyTokenAndAuthorization, addressController.setAddressDefaultDefaultAddress);


module.exports = router;