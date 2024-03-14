const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    addressLine1: {type: String, required: true},
    postal: {type: String, required: true},
});

module.exports = mongoose.model('Address', AddressSchema);