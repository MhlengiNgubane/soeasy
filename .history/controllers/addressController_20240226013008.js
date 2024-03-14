const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    const newAddress = ({
    userId: req.user.id,
    addressLine1: req.body.addressLine1,
    postalCode: req.body.postalCode,
    default: req.body.default,
    deliveryInstructions: req.body.deliveryInstructions,
    latitude: req.body.latitude,
    longitude: req.body.longitude
    })
};