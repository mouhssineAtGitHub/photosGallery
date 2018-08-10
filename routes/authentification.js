const express = require("express");
const router = express.Router();

//Connect to DB
//const students = require("./connectionDB");


//Route to add a student:
router.post("/", function(req, res, next) {
 
  if (Object.keys(req.body).length) {

        if (req.body.userName == "admin" && req.body.password == "admin")  
            res.send({ pass: true});
        else 
            res.send({ pass: false});
      
  }
  else{
    res.send({ pass: false});
  }

});

module.exports = router;