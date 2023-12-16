const express = require('express');
const router = express.Router();
require("../config/db");
const Internshipselecteddata = require("../model/studentdashboard")
let IDofthecurrentuser;
router.post('/isinternshipselected', async (req, res) => {
    try {

        const newInternshipselecteddata = new Internshipselecteddata(req.body);
        const savedInternshipselecteddata = await newInternshipselecteddata.save();

        console.log(" set isinternshipselected", savedInternshipselecteddata);

        // Set the global variable
        idString = savedInternshipselecteddata._id;
        const x = idString.toString();
        IDofthecurrentuser = x;
        console.log('IDofthecurrentuser:', IDofthecurrentuser);

        res.status(200).json({ message: 'Successfully registered', isinternshipselected: savedInternshipselecteddata });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: 'Failed to register internship' });
    }
});



router.get('/isinternshipselected', async (req, res) => {
    try {
        // Fetch all internship details from the database
        const savedInternshipselecteddata = await Internshipselecteddata.find({ _id: IDofthecurrentuser });
        console.log(" get isinternship selected", savedInternshipselecteddata);
        res.status(200).json({ getisinternshipselected: savedInternshipselecteddata });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});






module.exports = router;