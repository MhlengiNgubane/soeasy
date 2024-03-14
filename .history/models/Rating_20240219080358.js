const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    ratingType: {type: String, required}
});

module.exports = mongoose.model('Rating', RatingSchema);