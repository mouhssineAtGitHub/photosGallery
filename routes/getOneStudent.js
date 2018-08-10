const express = require('express');
const router = express.Router();

//Connect to DB
const students = require('./connectionDB');


router.get('/:id', function(req, res, next) {

    students.findById(req.params.id, (err, myStudent)=>{

        if(!myStudent)  
            res.send({error: 'Error in requesting one student by ID!!!', myStudent:null})
        else 
            res.send({error: '', myStudent})
    });

});

module.exports = router;