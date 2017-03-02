import { Router } from 'express';
export var bla = Router();

import {C1} from '../classes/C1'



interface I1 {
  prop: number;
}

function doit(x : {prop: number}) {
    x.prop += 110;
}

function more(x : I1) {
  doit(x);
}

/* GET home page. */
bla.get('/', function(req, res, next) {
  let myObj = {a: 1, x: 2, prop: 2}
  more(myObj)
  let c1 = new C1(1,"a", false);
  let c2 = C1.make({c: "bla"});
  let n = C1.count;
  res.render('bla', { title: 'A bla page' + n.toString()});
});


