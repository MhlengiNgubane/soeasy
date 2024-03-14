const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    A: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Address', AddressSchema);