const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    user
});

module.exports = mongoose.model('Rating', RatingSchema);