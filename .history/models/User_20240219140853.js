const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique},
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchemaSchema);