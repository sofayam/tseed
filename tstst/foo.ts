
import * as express from "express";

class Foo {
    name: string;
    arr: [string]
    a1: number[]

}

let f = new Foo();

f.name = "his"

f.a1 = [1,2,3]

f["bla"] = 1

f.arr = ["a","1",];

f.a1[0] = 3

let e = express()

console.log("hi")