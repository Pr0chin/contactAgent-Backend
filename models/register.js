const mongoose = require ('mongoose');

const RegisterSchemas = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'Please enter your first name',
        trim: true
    },
    last_name: {
        type: String,
        required: 'Please enter your last name',
        trim: true
    },
    phone: {
        type: String,
        required: 'Please enter your phone',
        trim: true
    },
    password: {
        type: String,
        required: 'Please enter your password',
        trim: true
    },
    retypepassword: {
        type: String,
        required: 'Please enter your retype password',
        trim: true
    },
});

const Register = module.exports=mongoose.model('Register',RegisterSchemas);