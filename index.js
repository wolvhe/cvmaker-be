const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { mongoose } = require("./db.js");
var InfoController = require("./controllers/info.js");
var ExperienceController = require("./controllers/experience.js");

const port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));
// app.use(cors());
app.listen(port, () => console.log("server started at port 3000"));

app.use("/info", InfoController);
app.use("/experience", ExperienceController);