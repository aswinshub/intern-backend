const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InternshipSchema = new Schema({
    internshipname: {
        type: String,


    }
});

const Internshipdetail = mongoose.model('detail', InternshipSchema);
module.exports = Internshipdetail;
