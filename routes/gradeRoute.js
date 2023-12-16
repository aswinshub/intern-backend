const express = require ('express');
const router = express.Router();
const dashData = require("../model/gradeData");
require("../config/db");
const cors = require('cors')
router.use(cors());
const jwt = require('jsonwebtoken');

function verifytoken(req, res, next) {
  try {
      const token = req.headers.token;
      if (!token) throw 'Token not provided';

      const payload = jwt.verify(token, 'reactInternshipApp');
      if (!payload) throw 'Invalid token';
      req.authUser = payload; // Set authUser property
      next();
  } catch (error) {
      console.error(error);
      res.status(401).send('Unauthorized: ' + error);
  }
}



//GET Method -----------------

router.get("/",verifytoken, async (req, res) => {
    try {
      const data = await dashData.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
    }
  });


  module.exports = router;
