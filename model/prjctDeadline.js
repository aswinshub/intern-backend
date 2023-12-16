
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deadlineModel = new Schema({
    deadline: Date  // Add a field to store the deadline as a date
});

const deadline = mongoose.model('adminprojectdeadline', deadlineModel);

module.exports = deadline;