/**
 * 工厂方法模式（Factory Method）
 */
class Product {
    constructor() {
        if(new.target == Product){
            throw new Error('Product is an interface.');
        }
    }
    toString(){
    }
}

class ConcreteProduct extends Product {
    constructor() {
        super();
        this.value = 'product';
    }
    toString(){
        console.log(this.value);
    }
}

class ConcreteProduct1 extends Product {
    constructor() {
        super();
        this.value = 'product1';
    }
    toString(){
        console.log(this.value);
    }
}

class ConcreteProduct2 extends Product {
    constructor() {
        super();
        this.value = 'product2';
    }
    toString(){
        console.log(this.value);
    }
}

class Factory {
    constructor() {
        if(new.target == Factory){
            throw new Error('Factory is an interface.');
        }
    }
    createProduct() {
        return this.factoryMethod();
    }
}

class ConcreteFactory extends Factory {
    factoryMethod() {
        return new ConcreteProduct();
    }
}

class ConcreteFactory1 extends Factory {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}

class ConcreteFactory2 extends Factory {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}

export {
    ConcreteFactory,
    ConcreteFactory1,
    ConcreteFactory2 
}