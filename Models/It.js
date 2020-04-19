const mongoose = require('mongoose');

const ItSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    title: String

});


// the last parameter is telling the database which //
// collection this should all go to e.g. - it //
module.exports = mongoose.model('It', ItSchema, 'it');