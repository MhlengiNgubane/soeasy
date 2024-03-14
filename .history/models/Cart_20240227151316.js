const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: {type: String, required: true},
    userId: {type: String, required: true},
    productId: {type: String, required: true},
    additives: {type: Array, default: []},
    qty: {type: Nu, required: true},
});

module.exports = mongoose.model('Cart', CartSchema);