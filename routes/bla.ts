import { Router } from 'express';

import {C1} from '../classes/C1'

export var bla = Router();


/* GET home page. */
bla.get('/', function(req, res, next) {
  let c1 = new C1(1,"a", false);
  let c2 = C1.make({c: "bla"});
  let n = C1.count;
  res.render('bla', { title: 'A bla bla page'});
});


