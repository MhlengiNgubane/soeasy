const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    
});

module.exports = mongoose.model('Rating', RatingSchema);