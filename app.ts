import * as express from "express";
import * as path from "path"
import * as favicon from "serve-favicon"
import * as logger from "morgan"
import * as cookieParser from "cookie-parser"
import * as bodyParser from "body-parser"

import { index } from "./routes/index"
import { users } from "./routes/users" 
import { bla } from "./routes/bla"
var app = express();


// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', index);
app.use('/users', users);
app.use('/bla',bla);
// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  // MWA for some reason we never come in here
  console.error("foo" + err.stack);
  //res.status(500).send('Something broke!');
  //var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

if (app.get('env') === 'bigtimeforrealsies') {
  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}


module.exports = app;
