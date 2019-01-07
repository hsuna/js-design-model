/**
 * 模板方法（Template Method）
 */
class CaffeineBeverage {
    constructor(){
    }
    brew(){}
    addCondiments(){}
    boilWater() {
        console.log("boilWater");
    }
    pourInCup() {
        console.log("pourInCup");
    }

    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
}

class Coffee extends CaffeineBeverage{
    constructor() {
        super();
    }
    brew() {
        console.log("Coffee.brew");
    }
    addCondiments() {
        console.log("Coffee.addCondiments");
    }
}

class Tea extends CaffeineBeverage{
    constructor() {
        super();
    }
    brew() {
        console.log("Tea.brew");
    }
    addCondiments() {
        console.log("Tea.addCondiments");
    }
}

export {
    Coffee,
    Tea
}