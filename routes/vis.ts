import * as express from 'express';
export var vis = express.Router();

/* GET home page. */
vis.get('/', function(req, res, next) {
  res.render('vis', {layout: false});
});
