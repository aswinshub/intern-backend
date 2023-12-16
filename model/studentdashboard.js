const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentdashboardSchema = new Schema({

    isinternshipselected: {
        type: Boolean,
        default: false // You can set a default value if needed
    }
});

const Internshipselecteddata = mongoose.model('internshipselecteddata', studentdashboardSchema);
module.exports = Internshipselecteddata;
