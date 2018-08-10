const express = require("express");
const router = express.Router();

// Connect to DB
const students = require("./connectionDB");


router.put("/", function(req, res, next) {
  
  if (Object.keys(req.body).length) {
    
    students.findByIdAndRemove(req.body._id, (err, deletedStudent) => {
      
      if (!deletedStudent)
        res.send({ error: "Error in deleting!!!", deletedStudent: null });
      else 
        res.send({ error: "", deletedStudent });
    });
  }
  else{      
    res.send({ error: "Empty Request", deletedStudent: null });
  } 
});

module.exports = router;