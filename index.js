const bodyParser = require('body-parser');
const express = require('express');


const {mongoose}=require('./db.js');


var app = express();
app.use(bodyParser.json());

app.listen(3000,()=>console.log("Server running at 3000"));
