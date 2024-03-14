const mongoose = require('mongoose');

const RestaSchema = new mongoose.Schema({
    title: {type: String, required: true},
    value: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Restaurant', RestaurantSchema)