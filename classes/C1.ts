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

    public fake(): string {
        return this.b
    }

}


let c = new C1(99, "hi", false);

