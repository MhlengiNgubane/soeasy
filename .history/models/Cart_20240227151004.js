const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    id: {type: String, required: true},
    userId: {type: String, required: true},
    pro: {type: String, required: true},
});

module.exports = mongoose.model('Cart', CartSchema);