
import * as express from "express";

class Foo {
    name: string;
    arr: string[]
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

function inc(a: number) {
    return a + 1;
}
var x = inc(1)

//x += "fs"

interface I {
    arr: number[],
    str: string,
}

var xi: I = {
    arr: [1,2,3],
    str: "foo",
}

function foo(x: I): string {
    // x.arr[0] = "bar"
    // return x.arr[2];
    return x.str
}

interface Cat {
    type: "cat",
    mice_caught: number;
}
interface Dog {
    type: "dog",
    bones_gnawed: number;
}

type Pet = Cat | Dog;

function details(p: Pet): string {
    if (p.type == "dog") {
        return p.bones_gnawed + " bones "
    }
    else {
        return p.mice_caught + " mice "
    }
}

interface Animal {
    name: string;
}

type Creature = Pet & Animal;

var moggie: Creature = {
    name: "felix",
    type: "cat",
    mice_caught: 10,
}

