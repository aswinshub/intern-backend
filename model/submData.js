const mongoose = require('mongoose');
const Schema = mongoose.Schema

const subSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }, 
    comments:{
        type:String,
        required:true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata', // Replace with the actual reference model name
        required: true,
      },
      
    }, {collection:'submissiondata'});

const submission = mongoose.model('submissiondata',subSchema)
module.exports = submission