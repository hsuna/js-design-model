/**
 * 抽象工厂模式（Abstract Factory）
 */
class AbstractProductA {
    constructor() {
        if(new.target == AbstractProductA){
            throw new Error('AbstractProductA is an interface.');
        }
    }
    toString(){}
}

class AbstractProductB {
    constructor() {
        if(new.target == AbstractProductB){
            throw new Error('AbstractProductB is an interface.');
        }
    }
    toString(){}
}

class ProductA1 extends AbstractProductA {
    constructor() {
        super();
        this.value = 'productA1';
    }
    toString(){
        console.log(this.value);
    }
}

class ProductA2 extends AbstractProductA {
    constructor() {
        super();
        this.value = 'productA2';
    }
    toString(){
        console.log(this.value);
    }
}

class ProductB1 extends AbstractProductB {
    constructor() {
        super();
        this.value = 'productB1';
    }
    toString(){
        console.log(this.value);
    }
}

class ProductB2 extends AbstractProductB {
    constructor() {
        super();
        this.value = 'productB2';
    }
    toString(){
        console.log(this.value);
    }
}

class AbstractFactory {
    constructor() {
        if(new.target == AbstractFactory){
            throw new Error('AbstractFactory is an abstract.');
        }
    }
    createProductA() {}
    createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }
    createProductB() {
        return new ProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }
    createProductB() {
        return new ProductB2();
    }
}

export {
    ConcreteFactory1,
    ConcreteFactory2 
}