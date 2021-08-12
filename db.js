const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cvmaker',(err)=>
{
    if(!err){
        console.log("Successfully connected to the Database...")
    }
    else{
        console.log("Error in connecting to the Database : " + JSON.stringify(err,undefined,2));
    }
}
);

module.exports=mongoose;
