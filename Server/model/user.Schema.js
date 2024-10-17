const mongoose = require('mongoose');

// defining user google schema

const UserSchema = new mongoose.Schema(
    {
        googleId : {
            type : String,
            required : true
        },
        displayName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        image : {
            type : String,
        },
    }, { timestamps: true}
)

const userdb = new mongoose.model('logins', UserSchema)

module.exports = userdb;  