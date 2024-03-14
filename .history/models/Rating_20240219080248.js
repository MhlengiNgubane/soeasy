const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId: {type: String}
});

module.exports = mongoose.model('Rating', RatingSchema);