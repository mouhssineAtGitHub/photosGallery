var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { 

    title: 'Integrify Photos Gallery API',
    content: 'Powered by: Node, Express, Mongodb and Mongose...',
    footerContent: 'Version 1.0 Last edition on: 07-30-2018. by: Mouhssine Idrissi Akhelij'
    
 });

});

module.exports = router;
