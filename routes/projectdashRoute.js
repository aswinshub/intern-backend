const express = require ('express');
const router = express.Router();
router.use(express.json());
const cors = require('cors')
router.use(cors());
const jwt = require('jsonwebtoken')
router.use(express.urlencoded({ extended: true }));
const dashData = require("../model/dicussData");
require("../config/db");





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
  
  // POST Method----------
  
  router.post("/add",verifytoken,  async (req, res) => {
    try {
      var item = req.body;
      const Data = new dashData(item);
      const saveddata = await Data.save();
      res.status(200).send("Added Successful");
    } catch (error) {
      res.status(404).send("Error !");
    }
  });
  
  
  
  router.put('/edit/:id',verifytoken, async(req,res)=>{
    try {
        var item=req.body;
       const data= await dashData.findByIdAndUpdate(req.params.id,item);
        res.status(200).send('Updated successfully');
    } catch (error) {
        res.status(404).send('Update not working');
    } 
    
  })
  
  //Deleted Method-----------
  
  router.delete("/remove/:id",verifytoken,  async (req,res) => {
   
    try {
      const BlogId = req.params.id;
      const data = await dashData.findByIdAndDelete(BlogId);
      console.log(data)
      res.status(200).send('Deleted');
    } catch (error) {
      res.status(404).send("No data found");
    }
  });
  module.exports = router;
