const express = require("express");
const router = express.Router();

//Connect to DB 
const students = require("./connectionDB");

//Route to add a student:
router.post("/", function(req, res, next) {

  const maxSize = 4 * 1024 * 1024;
  const imgExtPattern = /\.(jpg|jpeg|png|gif)$/;

  if (!req.files) 
    return res.send({ uploaded: "No file selected!!!" });
  
  let studentPicture = req.files.file;

  if (!studentPicture.name.match(imgExtPattern)) 
    return res.send({ uploadResp:"Only image files are allowed!"});

  const newfileName = req.body._id + Date.now() + ".png";  
  
  //const pathAndName = `${__dirname}/./public/images/${newfileName}`;
  const pathAndName = `${__dirname}/../public/images/${newfileName}`;

  studentPicture.mv(pathAndName, function(err) {
    
    if (err) return res.send({ uploadResp: "fails!!!" });

    const id = req.body._id;

    students.findByIdAndUpdate(id, { $set: {src: newfileName}}, { new: true }, function (err, updatedStudent) {
       
        if(!updatedStudent) 
            return res.send({uploadResp: 'Error in updating!!!'})

    });

    res.send({ uploadResp: "OK" });
  });
});

module.exports = router;
