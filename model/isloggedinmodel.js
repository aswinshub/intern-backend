const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    isloggedin: {
        type: Boolean,
        default: false // You can set a default value if needed
    }
});

const Userlogindata = mongoose.model('userlogindata', userSchema);
module.exports = Userlogindata;
