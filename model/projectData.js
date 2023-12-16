const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projecttitle: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    projectreport: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },   studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata', // Replace with the actual reference model name
        required: true,
      },
      
    }, {collection:'projectreport'});


const Project = mongoose.model('projectreport', projectSchema);

module.exports = Project;

