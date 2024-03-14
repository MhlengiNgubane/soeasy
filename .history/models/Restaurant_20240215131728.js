const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    title: {type: String, required: true},
    va: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Restaurant', RestaurantSchema)