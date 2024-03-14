const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {t}
});

module.exports = mongoose.model('User', UserSchemaSchema);