const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    userId: req.user.id,
    addressLine1: req.body.addressLine1,
    postalCode: req.body.postalCode,
    default: req.body.default,
    deliveryInstructions: req.body.deliveryInstruction
};