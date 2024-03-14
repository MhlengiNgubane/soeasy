const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user
});

module.exports = mongoose.model('User', UserSchemaSchema);