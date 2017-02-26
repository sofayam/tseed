import * as express from 'express';
export var users = express.Router();

/* GET users listing. */
users.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

