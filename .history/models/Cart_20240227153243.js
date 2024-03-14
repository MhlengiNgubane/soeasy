const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    productId: {type: String, required: true},
    additives: {type: Array, default: []},
    qty: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    instructions: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model('Cart', CartSchema);