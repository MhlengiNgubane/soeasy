const router = require('express').Router();
const addressController = require('../controllers/addressController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');



module.exports = router;