const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {type: String, required: true},
    value
});