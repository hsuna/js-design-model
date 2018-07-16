/**
 * 原型模式（Prototype）
 */
class Prototype{
    constructor() {
        if(new.target == Prototype){
            throw new Error('Prototype is an interface.');
        }
    }
    clone(){}
}

class ConcretePrototype extends Prototype {
    constructor(value) {
        super();
        this.value = value;
    }
    clone(){
        return new ConcretePrototype(this.value);
    }
    toString() {
        console.log(this.value);
    }
}

export default ConcretePrototype;