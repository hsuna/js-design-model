/**
 * 策略（Strategy）
 */
class QuackBehavior {
    constructor(){
        if(new.target == QuackBehavior) {
            throw new Error('QuackBehavior is an interface.');
        }
    }
    quack(){}
}

class Quack extends QuackBehavior {
    constructor() {
        super();
    }
    quack() {
        console.log('quack!');
    }
}

class Squeak extends QuackBehavior {
    constructor() {
        super();
    }
    quack() {
        console.log('squeak!');
    }
}

class Duck {
    constructor() {}
    performQuack() {
        if (this.quackBehavior != null) {
            this.quackBehavior.quack();
        }
    }
    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
}

export {
    Duck,
    Squeak,
    Quack
}