/**
 * 迭代器（Iterator）
 */
class Aggregate {
    constructor() {
        if(new.target == Aggregate) {
            throw new Error('Aggregate is an interface.');
        }
    }
    createIterator(){}
}

class ConcreteAggregate extends Aggregate {
    constructor(){
        super();
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    createIterator(){
        return new ConcreteIterator(this.items);
    }
}

class Iterator{
    constructor() {
        if(new.target == Iterator) {
            throw new Error('Iterator is an interface.');
        }
    }
    next(){}
    hasNext(){}
}

class ConcreteIterator extends Iterator {
    constructor(items){
        super();
        this.position = 0;
        this.items = items;
    }
    next(){
        return this.items[this.position++];
    }
    hasNext(){
        return this.position < this.items.length;
    }
}

export {
    ConcreteAggregate
}