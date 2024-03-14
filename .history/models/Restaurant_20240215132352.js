const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    imageUrl: {type: String, required: true},
    foods: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Restaurant', RestaurantSchema)