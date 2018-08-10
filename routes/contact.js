const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer"); 

router.post('/', function(req, res, next) {
    
    if (Object.keys(req.body).length) {

        let { firstName, lastName, email, content } = req.body;
        const info = `<h1>Integrify Photos Gallery Application</h1>
          <h3>Email sent by mouhssine</h3>
          <p>
          <h3>Form details:</h3>
              firstname: ${firstName}
              <br/> lastname: ${lastName}
              <br/> email: ${email}
              <br/> message: ${content}
              <br/>
              <p>`;
      
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "mouhssineidrissiakhelij1982@gmail.com",
            pass: "XXXXXX"
          }
        });
      
        var mailOptions = {
          from: "mouhssineidrissiakhelij1982@gmail.com",
          to: email,
          subject: "Sending Email Integrify PhotosGallery App",
          html: "<p>" + info + "</p>"
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          
          if (error) {
            return res.send({ success: false});
          } else {
            return res.send({ success: true});
          }

        });

    }
    else{
        return res.send({ success: false});
    }
});

module.exports = router;