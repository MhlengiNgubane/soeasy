const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    addressLine1: {type: String, required: true},
    postalCode: {type: String, required: true},
    default: {type: Boolean, required: false},
    deliveryInstructions: {type: String, required: false},
    latitude: {type: String, required: false},
});

module.exports = mongoose.model('Address', AddressSchema);