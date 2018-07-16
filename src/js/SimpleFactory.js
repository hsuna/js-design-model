/**
 * 简单工厂模式（Simple Factory）
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

export default class SimpleFactory {
    constructor() {
    }
    createProduct(type) {
        if (type == 1) {
            return new ConcreteProduct1();
        } else if (type == 2) {
            return new ConcreteProduct2();
        }
        return new ConcreteProduct();
    }
}