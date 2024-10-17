
const mongoose = require('mongoose');

// defining user JWT Sehema

const userSchema = new mongoose .Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    tc : {
        type : Boolean,
        required : true
    },
    provider : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;