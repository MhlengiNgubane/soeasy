const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    addAddress: async (req, res) => {

        const newAddress = new ({
            userId: req.user.id,
            addressLine1: req.body.addressLine1,
            postalCode: req.body.postalCode,
            default: req.body.default,
            deliveryInstructions: req.body.deliveryInstructions,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        });

        try {
            
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
};