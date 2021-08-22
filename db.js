const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cvmaker', (err) => {
    if(!err)
        console.log("mongodb connection success");
    else
        console.log("connection failed : ", err);
});

module.exports = mongoose;