const express = require('express');
const router = express.Router();
require("../config/db");
const Internshipdetail = require("../model/userInternshipDetails")



router.use(express.json());
router.use(express.urlencoded({ extended: true }));
let IDofthecurrentuser;
router.post('/selectedinternship', async (req, res) => {
    try {
        console.log("Request body of selected internship:", req.body);

        const Userinternshipinfo = new Internshipdetail(req.body);
        const savedInternship = await Userinternshipinfo.save();

        console.log("Saved internship:", savedInternship);

        // Set the global variable
        idString = savedInternship._id;
        const x = idString.toString();
        IDofthecurrentuser = x;
        console.log('IDofthecurrentuser:', IDofthecurrentuser);

        res.status(200).json({ message: 'Successfully registered', internships: savedInternship });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: 'Failed to register internship' });
    }
});



router.get('/selectedinternship', async (req, res) => {
    try {
        // Fetch all internship details from the database
        const Nameoftheinternship = await Internshipdetail.find({ _id: IDofthecurrentuser });


        console.log("Name of the internship", Nameoftheinternship);
        res.status(200).json({ nameoftheinternship: Nameoftheinternship });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;