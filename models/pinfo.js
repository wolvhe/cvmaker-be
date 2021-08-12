const mongoose = require('mongoose');

var User = mongoose.model('User', {

    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone_no: { type: Number },
    address: { type: String },
    zip_code: { type: String },
    city: { type: String },
    dob:{type:String},
    pob: { type: String },
    driving_license: { type: String },
    gender: { type: String },
    nationality: { type: String },
    marital_status: { type: String },
    linkedin: { type: String },
    website: { type: String },

});

module.exports = { User };