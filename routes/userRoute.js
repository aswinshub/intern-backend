const userData = require('../model/userData');
// const Internshipdetail = require("../model/userInternshipDetails")
const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let IDofthecurrentuser;
//Signup
router.post('/add', async (req, res) => {
    try {
        const data = req.body;

        // Check if exit mark is greater than 45
        if (parseInt(data.exitmark) >= 45) {
            const user = await userData(data).save();
            res.status(200).json({ message: 'successfully registered' });
        } else {
            // If exit mark is not greater than 45, return an error
            res.status(400).json({ error: 'Exit mark must is less than required' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});



//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: 'error', message: 'Email and password are required' });
        }

        const user = await userData.findOne({ email });
        console.log("user the user is ", user);



        idString = user._id;
        const x = idString.toString();
        IDofthecurrentuser = x;
        console.log('IDofthecurrentuser: in login', IDofthecurrentuser);

        if (user) {
            // Compare the provided password with the password stored in the database
            if (password === user.password) {
                let payload = { email: user.email, userId: user._id }; // Include other relevant information in the payload
                let token = jwt.sign(payload, 'reactInternshipApp');
                res.status(200).send({ message: 'success', token: token });
            } else {
                res.status(401).send({ message: 'Invalid password' });
            }
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});



//STUDENT DASHBOARD =====>

router.put('/selectedinternship', async (req, res) => {
    try {

        const doc = await userData.findById(IDofthecurrentuser)
        doc.internshipname = req.body.internshipname
        doc.isinternshipselected = true

        await doc.save();

        console.log("selected internship ha ,", doc, req.body)
        // doc = req.body;
        // const Userinternshipinfo = new Internshipdetail(req.body);
        // // const savedInternship = await Userinternshipinfo.save();

        // console.log("Saved internship:", savedInternship);

        // Set the global variable


        res.status(200).json({ message: 'Successfully registered', reqsbody: req.body });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: 'Failed to register internship' });
    }
});




router.get('/selectedinternship', async (req, res) => {
    try {

        const doc = await userData.findById(IDofthecurrentuser)
        console.log("selected internship ha ,", doc, req.body)
        res.status(200).json({ message: 'Successfully registered', doc: doc });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: 'Failed to register internship' });
    }
});
module.exports = router;
