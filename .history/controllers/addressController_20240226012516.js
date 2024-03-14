const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    userId: req.user.id,
    addressLine1: req.body.addressLine1,
    
};