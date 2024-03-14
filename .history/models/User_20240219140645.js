const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {}
});

module.exports = mongoose.model('User', UserSchemaSchema);