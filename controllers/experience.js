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
        res_des: req.body.res_des,
        work_jobtitle: req.body.work_jobtitle,
        work_city: req.body.work_city,
        work_employer: req.body.work_employer,
        work_startDate_month: req.body.work_startDate_month,
        work_startDate_year: req.body.work_startDate_year,
        work_endDate_month: req.body.work_endDate_month,
        work_endDate_year: req.body.work_endDate_year,
        work_des: req.body.work_des,
        edu_degree: req.body.edu_degree,
        edu_city: req.body.edu_city,
        edu_school: req.body.edu_school,
        edu_startDate_month: req.body.edu_startDate_month,
        edu_startDate_year: req.body.edu_startDate_year,
        edu_endDate_month: req.body.edu_endDate_month,
        edu_endDate_year: req.body.edu_endDate_year,
        edu_des: req.body.edu_des,
        hobby: req.body.hobby,
        ref_companyName: req.body.ref_companyName,
        ref_contactPerson: req.body.ref_contactPerson,
        ref_phoneNo: req.body.ref_phoneNo,
        ref_email: req.body.ref_email,
        skill: req.body.skill,
        skill_startDate: req.body.skill_startDate,
        lang: req.body.lang,
        lang_startDate: req.body.lang_startDate,
        course_title: req.body.course_title,
        course_institution: req.body.course_institution,
        course_startDate_month: req.body.course_startDate_month,
        course_startDate_year: req.body.course_startDate_year,
        course_endDate_month: req.body.course_endDate_month,
        course_endDate_year: req.body.course_endDate_year,
        course_des: req.body.course_des,
        achiev_des: req.body.achiev_des,
        publi_des: req.body.publi_des,
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