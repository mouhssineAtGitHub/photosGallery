var createError = require('http-errors');
var express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');

const studentsRouter = require('./routes/getAllStudents.js');
const getOneStudentRouter = require('./routes/getOneStudent.js');
const addStudentRouter = require('./routes/addStudent.js');
const updateStudentRouter = require('./routes/updateStudent.js');
const deleteStudentRouter = require('./routes/deleteStudent.js');
const contactRouter = require('./routes/contact.js');
const uploadFile = require('./routes/uploadFile.js');
const authentification = require('./routes/authentification.js');
const reactApp = require('./routes/reactApp.js');

const app = express();


// Express fileupload middleware
app.use(fileUpload());

//CORS handling
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, multipart/form-data");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());


//app.use('/', indexRouter);

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname,'/client/build/index.html'));
})


app.use(express.static(path.join(__dirname, 'public/images')));


app.use('/students', studentsRouter);
app.use('/students', getOneStudentRouter);
app.use('/addStudent', addStudentRouter);
app.use('/updateStudent', updateStudentRouter);
app.use('/deleteStudent', deleteStudentRouter);
app.use('/contact', contactRouter);
app.use('/uploadFile', uploadFile);
app.use('/auth', authentification);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
 
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;