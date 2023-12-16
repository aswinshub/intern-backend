const express = require('express');
const router = express.Router();
require("../config/db");
const Userlogindata = require("../model/isloggedinmodel")
let IDofthecurrentuser;
router.post('/theuserlogindata', async (req, res) => {
    try {

        const newuserlogindata = new Userlogindata(req.body);
        const saveduserlogindata = await newuserlogindata.save();

        console.log("Saved saveduserlogindata:", saveduserlogindata);

        // Set the global variable
        idString = saveduserlogindata._id;
        const x = idString.toString();
        IDofthecurrentuser = x;
        console.log('IDofthecurrentuser:', IDofthecurrentuser);

        res.status(200).json({ message: 'Successfully registered', saveduserlogindata: saveduserlogindata });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: 'Failed to register internship' });
    }
});



router.get('/theuserlogindata', async (req, res) => {
    try {
        // Fetch all internship details from the database
        const saveduserlogindata = await Userlogindata.find({ _id: IDofthecurrentuser });


        console.log("Name of the saveduserlogindata", saveduserlogindata);
        res.status(200).json({ saveduserlogindata: saveduserlogindata });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});






module.exports = router;