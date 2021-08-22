const mongoose = require('mongoose');

var Info = mongoose.model('resume', {
    photo: { type: String },
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

var Experience = mongoose.model('experience', {
    // fname: { type: [String] },
    res_des: { type: String },
    work_jobtitle: { type: String },
    work_city: { type: String },
    work_employer: { type: String },
    work_startDate_month: { type: String },
    work_startDate_year: { type: String },
    work_endDate_month: { type: String },
    work_endDate_year: { type: String },
    work_des: { type: String },
    // education
    edu_degree: { type: String },
    edu_city: { type: String },
    edu_school: { type: String },
    edu_startDate_month: { type: String },
    edu_startDate_year: { type: String },
    edu_endDate_month: { type: String },
    edu_endDate_year: { type: String },
    edu_des: { type: String },
    // interests
    hobby: { type: String },
    // references
    ref_companyName: { type: String },
    ref_contactPerson: { type: String },
    ref_phoneNo: { type: Number }, 
    ref_email: { type: String },
    // skills
    skill: { type: String },
    skill_startDate: { type: String },
    // languagues
    lang: { type: String },
    lang_startDate: { type: String },
    // courses
    course_title: { type: String },
    course_institution: { type: String },
    course_startDate_month: { type: String },
    course_startDate_year: { type: String },
    course_endDate_month: { type: String },
    course_endDate_year: { type: String },
    course_des: { type: String },
    // achievements
    achiev_des: { type: String },
    // publications
    publi_des: { type: String },
});

module.exports = {Info, Experience};


