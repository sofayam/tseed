
import { foo, bar } from './foo';

export class C1 {

    static count: number = 0;

    b: string;

    constructor (private a: number, public c: string, b: boolean) {
        this.b = b.toString()
        C1.count++
    }

    public tellme (): number {
        return this.a
    }

    public static make(obj: any): C1 {
        return new C1(obj.a, obj.c, true);
    }

    add(x,y) { return x + y} // crappy old untyped js

    derived() {
        var a = {a:1}
        var b = {}
        //a = {}           // these guys are illegal
        //b.foo = 1
    }
    
}

class DC {
    a : number;
}
interface DI {
    b : number;
}
interface DIX extends DI {
    c : number;
}
class DIXC implements DIX {
    c : number; 
    b : number;
}
class DIXC1 extends DIXC {
    d: number;
}

let dc = new DC();
let dix: DIX = {b: 1, c:2};

//let di = new DI();
dc.a = 1;
enum E {A,B,C}

enum F {D,E,F}

let c = new C1(99, "hi", false);

let e = E.A

let b = e

let s: string = E[E.A]

function f (x: E): number {
    console.log(x.toString())
    return x + 1
} 

f(b);

function overl (n :number) : number;
function overl (b : boolean): boolean;
function overl (x: number | boolean ){
    if (typeof x === "boolean") {
        return !x
    } else {
        return x + 1;
    }
}

let ores = overl(1)

ores = 1;

type textono = (string) => number

function callsig (tst: string, fun: textono): number {
    return fun(tst);
}

function ln(s: string): number {
    foo(1);
    // bar("bla") this is declared in the d.ts but not implemented
    return s.length
}

var nres = callsig("foobar", ln);


