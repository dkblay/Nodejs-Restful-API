const mongoose  = require('mongoose');

let Schema  = mongoose.Schema;
let roles = ['user', 'admin'];

let userSchema  = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        require: true
    },
    role: {
        type: String,
        enum: roles
    }
});

module.exports  = mongoose.model('User', userSchema, 'users');