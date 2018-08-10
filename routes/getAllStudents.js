const express = require('express');
const router = express.Router();

//Connect to DB
const students = require('./connectionDB');


router.get('/', function(req, res, next) {
    
  students.find({}).sort({_id: 'desc'}).exec( (err, myStudents)=>{

      if(!myStudents)  
          res.send({error: 'Error in requesting all students!!!', myStudents:null})
      else 
          res.send({error: '', myStudents})
  });
  
});

module.exports = router;