
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminModel = new Schema({
    assignment1: String,
    deadline: Date  // Add a field to store the deadline as a date
});

const admin = mongoose.model('adminquestion', adminModel);

module.exports = admin;
