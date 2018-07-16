/*
 *享元（Flyweight）
 */
class Flyweight {
    constructor() {
        if(new.target == Flyweight) {
            throw new Error('Flyweight is an abstract.');
        }
    }
    doOperation(extrinsicState){}
}

class ConcreteFlyweight extends Flyweight {
    constructor(intrinsicState) {
        super();
        this.intrinsicState = intrinsicState;
    }
    doOperation(extrinsicState) {
        console.log("IntrinsicState: " + this.intrinsicState);
        console.log("ExtrinsicState: " + extrinsicState);
    }
}

class FlyweightFactory {
    constructor(){
        this.flyweights = {};
    }
    getFlyweight(intrinsicState) {
        if(!this.flyweights[intrinsicState]){
            this.flyweights[intrinsicState] = new ConcreteFlyweight(intrinsicState);
        }
        return this.flyweights[intrinsicState];
    }
}

export {
    Flyweight,
    FlyweightFactory
}