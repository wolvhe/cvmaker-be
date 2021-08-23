const express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();

var {Info} = require('../models/info');


router.get('/', async(req, res) => {
    try {
        const data = await Info.find().sort({_id:-1}).limit(1);
        res.send(data)
    } catch (err) {
        console.error(err.message)
    }
});

router.post('/', async(req, res) => {
    var emp = new Info({
        photo: req.body.photo,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        address: req.body.address,
        zip_code: req.body.zip_code,
        city: req.body.city,
        dob: req.body.dob,
        pob: req.body.pob,
        driving_license: req.body.driving_license,
        gender: req.body.gender,
        nationality: req.body.nationality,
        marital_status: req.body.marital_status,
        linkedin: req.body.linkedin,
        website: req.body.website,
    }); 
    emp.save((err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else
            console.log(err.message)
    });
});


module.exports = router;