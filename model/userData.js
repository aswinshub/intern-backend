const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // Use your desired regular expression for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address'
        }
    },
    exitmark: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Check if the password meets the specified criteria
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/.test(value);
            },
            message: 'Password must be 8-12 characters and include at least one uppercase letter, one lowercase letter, and one digit'
        }
    },
    phonenumber: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value);
            },
            message: 'phone number should be valid'
        }
    },
    internshipname: {
        type: String,
    },
    isinternshipselected: {
        type: Boolean,
        default: false // You can set a default value if needed
    },
    isprojectsubmitted: {
        type: Boolean,
        default: false // You can set a default value if needed
    }
});

const user = mongoose.model('userdata', userSchema);
module.exports = user;
