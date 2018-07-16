/**
 * 适配器（Adapter）
 */
class Duck {
    constructor() {
        if(new.target == Duck) {
            throw new Error('Duck is an interface.');
        }
    }
    quack(){}
}

class Turkey {
    constructor() {
        if(new.target == Turkey) {
            throw new Error('Turkey is an interface.');
        }
    }
    gobble(){}
}

class WildTurkey extends Turkey {
    gobble() {
        console.log("gobble!");
    }
}

class TurkeyAdapter extends Duck {
    constructor(turkey){
        super();
        this.turkey = turkey;   
    }
    quack() {
        this.turkey.gobble();
    }
}

export {
    WildTurkey,
    TurkeyAdapter
}