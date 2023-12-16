const mongoose = require('mongoose');
const gradeSchema = mongoose.Schema({
  project:String,
  range:Number,
  mark:Number,
  feedback:String



})

const Data=mongoose.model('gradedatas',gradeSchema)
module.exports = Data;

