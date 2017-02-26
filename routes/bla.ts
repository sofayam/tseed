import * as express from 'express';
export var bla = express.Router();

/* GET home page. */
bla.get('/', function(req, res, next) {
  res.render('bla', { title: 'A bla bla page' });
});


