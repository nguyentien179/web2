const mongoose  = require('mongoose');
var SubjectSchema = new mongoose.Schema({
    name: String,
    code: Number,
})

var SubjectModel = mongoose.model('subject',StudentSchema, 'subject');
module.exports = SubjectModel;
