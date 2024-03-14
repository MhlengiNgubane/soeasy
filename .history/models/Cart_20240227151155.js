const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: {type: String, required: true},
    userId: {type: String, required: true},
    productId: {type: String, required: true},
    a: {type: String, required: true},
});

module.exports = mongoose.model('Cart', CartSchema);