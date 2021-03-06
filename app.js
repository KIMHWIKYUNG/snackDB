var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var hellos = require('./routes/hello');
var welcomes = require('./routes/welcome')

var app = express();
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mogoosedb');
// var UserSchema = mongoose.Schema({
//   id:String,
//   pass:String
// });
// var User = mongoose.model('express',UserSchema);

mongoose.connect('mongodb://localhost/s');
var commentsSchema  = new mongoose.Schema({
  _commentsId:{type:Number},
  by:{_usersId:{type:Number}, nickname:String},
  text:String,
  grade:String,
  c_timestamp:Date,
  snack_name:String
});

var comment = mongoose.model('comments', commentsSchema);
var comments = new comment();
//comments._commentsId={1};npm
comments.text = "hello";
comments.c_timestamp = new Date();
comments.snack_name = "새우깡";
comments.save(function(err){
  if(!err) console.log("success!");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/hello', hellos);
app.use('/welcome', welcomes);
app.post('/login', function(req, res, err){
    var user = new User();
    req.body;
    // user.id = req.body.idd;
    // user.pass = req.body.passed;
    user.save(function(err) {
      if(!err) alert('success!!');
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
