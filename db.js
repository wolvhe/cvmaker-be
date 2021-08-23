const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://neon:neon@cluster0.ero8t.mongodb.net/cvmaker', (err) => {
    if(!err)
        console.log("mongodb connection success");
    else
        console.log("connection failed : ", err);
});

// mongoose.connect('mongodb://localhost:27017/cvmaker', (err) => {
//     if(!err)
//         console.log("mongodb connection success");
//     else
//         console.log("connection failed : ", err);
// });

module.exports = mongoose;