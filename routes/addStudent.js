const express = require("express");
const router = express.Router();

//Connect to DB
const students = require("./connectionDB");


//Route to add a student:
router.post("/", function(req, res, next) {
 
  if (Object.keys(req.body).length) {
 
      delete req.body.studentPicture;
      req.body.src="noimage.jpg";
      req.body.alt=req.body.firstName;
      req.body.skills = req.body.skills.split(",");

      const newStudent = new students(req.body);

      newStudent.save((err, myStudent) => {
        if (!myStudent)  
          res.send({ error: "Error in requesting ID", myStudent: null });
        else 
          res.send({ error: "", myStudent });
      });
      

  }
  else{
    res.send({ error: "Empty Request", myStudent: null });
  }

});

module.exports = router;
