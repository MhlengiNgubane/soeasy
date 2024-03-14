const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: {type: String, required: true},
    userI: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Cart', CartSchema);