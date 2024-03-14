const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const CartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true},
    additives: {type: Array, required default: []},
    qty: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    instructions: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model('Cart', CartSchema);