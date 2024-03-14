const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    imageUrl: {type: String, required: true},
    foods: {type: Array, default: []},
    pickup: {type: Boolean, required: true},
    delivery: {type: Boolean, required: true},
    isAvailable: {type: Boolean, required: true},
    owner: {type: String, required: true},
    code: {type: String, required: true},
    logoUrl: {type: String, required: true},
    rating: {type: String, required: true},
});

module.exports = mongoose.model('Restaurant', RestaurantSchema)