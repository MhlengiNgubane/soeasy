const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    foodTags: {type: Array, required: true},
    category: {type: String, required: true},
    foodType: {type: Array, required: true},
    code: {type: String, required: true},
    isAvailable: {type: Boolean, default: true},
    restaurant: {type: mongoose., required: true},
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Food', FoodSchemaSchema);