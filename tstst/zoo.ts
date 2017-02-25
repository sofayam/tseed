interface AbstractAnimal extends BaseAnimal {
    // encapsulates animal behaviors that must be implemented
    makeSound(input : string): string;
}

class BaseAnimal {
    constructor(public name) { }

    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}

// If concrete class doesn't extend both, it cannot use super methods.
class Snake extends BaseAnimal implements AbstractAnimal {
    constructor(name) { super(name); }
    makeSound(input : string): string {
        var utterance = "sssss"+input;
        alert(utterance);
        return utterance;
    }
    move() {
        alert("Slithering...");
        super.move(5);
    }
}

var longMover = new Snake("windy man");