const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required}
});

module.exports = mongoose.model('User', UserSchemaSchema);