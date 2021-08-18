const express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();

var {Experience} = require('../models/info');


router.get('/', async(req, res) => {
    try {
        const data = await Experience.find({ })
        res.send(data)
    } catch (err) {
        console.error(err.message)
    }
});

router.post('/', async(req, res) => {
    var emp = new Experience({
        res_obj: req.body.res_obj,
        workexp_jobTitle: req.body.workexp_jobTitle,
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