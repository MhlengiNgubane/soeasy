const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: {type: String, required: true},
    userId: {type: String, required: true},
    productId: {type: String, required: true},
    additives: {type: Array, default: []},
    qty: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    instruction
});

module.exports = mongoose.model('Cart', CartSchema);