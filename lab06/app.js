var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var hbs = require('hbs');
var app = express();

var mongoose = require('mongoose');
var local = "mongodb://127.0.0.1:27017/gch1101"
var cloud = "mongodb+srv://nguyentien100333:Khongduocnoi1@cluster0.sn4ymgq.mongodb.net/"

hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

mongoose.connect(local)
.then(() => console.log('Connect success'))
.catch((err) => {console.log(err)});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
app.listen(3001)
module.exports = app;
