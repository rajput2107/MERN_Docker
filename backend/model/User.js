const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        unique:true
    },
    lname:{
        type: String,
        required: true 
    },
    age:{
        type: Number,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);