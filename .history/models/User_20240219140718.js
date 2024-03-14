const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, require}
});

module.exports = mongoose.model('User', UserSchemaSchema);