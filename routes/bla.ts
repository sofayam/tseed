import * as express from 'express';
export var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bla', { title: 'A bla bla page' });
});


