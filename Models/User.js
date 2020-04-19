const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    title: String

});


// the last parameter is telling the database which //
// collection this should all go to e.g. - users //
module.exports = mongoose.model('User', UserSchema, 'users');