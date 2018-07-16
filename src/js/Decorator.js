/**
 * 装饰（Decorator）
 */
class Beverage {
    constructor() {
        if(new.target == Beverage) {
            throw new Error('Beverage is an abstract.');
        }
    }
    cost(){}
}

class DarkRoast extends Beverage {
    cost() {
        return 1;
    }
}

class HouseBlend extends Beverage {
    cost() {
        return 1;
    }
}

class CondimentDecorator extends Beverage {
    constructor(beverage) {
        if(new.target == CondimentDecorator) {
            throw new Error('CondimentDecorator is an abstract.');
        }
        super();
        this.beverage = beverage;
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    cost() {
        return 1 + this.beverage.cost();
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    cost() {
        return 1 + this.beverage.cost();
    }
}

export {
    DarkRoast,
    HouseBlend,
    Milk,
    Mocha
}