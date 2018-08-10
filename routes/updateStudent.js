const express = require('express');
const router = express.Router();

//Connect to DB
const students = require('./connectionDB');


/* GET home page. */
router.put('/', function(req, res, next) {
   
    if (Object.keys(req.body).length) {
        
        const id = req.body._id;
        delete req.body._id;

        if(typeof req.body.skills == "string")
            req.body.skills = req.body.skills.split(",");

        students.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, updatedStudent) {
           
            if(!updatedStudent) 
                res.send({error: 'Error in updating!!!', updatedStudent:null})
            else 
                res.send({error: '', updatedStudent})

        }); 
    }
    else{       
        res.send({error: 'Error in updating!!!', updatedStudent:null})
    }
      
});


module.exports = router;