const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    foodTags: {type: Array, default: []}
    imageUrl: {type: String, required: true},
});

module.exports = mongoose.model('Food', FoodSchemaSchema);