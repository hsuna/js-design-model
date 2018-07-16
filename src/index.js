////////////////创建型模式////////////////

/* 
// 单例模式（Singleton）
import Singleton from "./js/Singleton";
Singleton.getInstance().toString();
*/

/*
// 简单工厂（Simple Factory）
import SimpleFactory from "./js/SimpleFactory";
let simpleFactory = new SimpleFactory();

let product1 = simpleFactory.createProduct(1);
product1.toString();

let product2 = simpleFactory.createProduct(2);
product2.toString();
*/

/*
// 工厂方法（Factory Method）
import {
    ConcreteFactory,
    ConcreteFactory1,
    ConcreteFactory2 
} from "./js/FactoryMethod";

let factory1 = new ConcreteFactory1();
let product1 = factory1.createProduct();
product1.toString();

let factory2 = new ConcreteFactory2();
let product2 = factory2.createProduct();
product2.toString();
*/

/*
// 抽象工厂（Abstract Factory）
import {
    ConcreteFactory1,
    ConcreteFactory2 
} from "./js/AbstractFactory";
let abstractFactory = new ConcreteFactory1();
let productA = abstractFactory.createProductA();
let productB = abstractFactory.createProductB();
productA.toString();
productB.toString();
*/

/*
// 生成器（Builder）
import Student from "./js/Builder"

let student1 = new Student.Builder(1, '张三').withPasswd('123456').withSex('男').build();
student1.toString();

let student2 = new Student.Builder(2, '李四').withPasswd('654321').withAddress('广州').build();
student2.toString();
*/

/*
// 原型模式（Prototype）
import ConcretePrototype from "./js/Prototype";

let prototype = new ConcretePrototype(1);
prototype.toString();

let prototype2 = prototype.clone();
prototype2.toString();
*/


////////////////行为型模式////////////////
/*
// 责任链（Chain Of Responsibility）
import {
    RequestType,
    Request,
    ConcreteHandler1,
    ConcreteHandler2
} from "./js/ChainOfResponsibility";
let handler1 = new ConcreteHandler1(null);
let handler2 = new ConcreteHandler2(handler1);
let request1 = new Request(RequestType.type1, "request1");
handler2.handleRequest(request1);
let request2 = new Request(RequestType.type2, "request2");
handler2.handleRequest(request2);
*/

/*
// 命令（Command）
import {
    Invoker,
    Light,
    LightOnCommand,
    LightOffCommand
} from "./js/Command.js";
let invoker = new Invoker();
let light = new Light();
let lightOnCommand = new LightOnCommand(light);
let lightOffCommand = new LightOffCommand(light);
invoker.setOnCommand(lightOnCommand, 3);
invoker.setOffCommand(lightOffCommand, 3);
invoker.onButtonWasPushed(3);
invoker.offButtonWasPushed(3);
*/

/*
// 解释器（Interpreter）
import {
    TerminalExpression,
    OrExpression,
    AndExpression
} from "./js/Interpreter.js";
function buildInterpreterTree() {
    // Literal
    let terminal1 = new TerminalExpression("A");
    let terminal2 = new TerminalExpression("B");
    let terminal3 = new TerminalExpression("C");
    let terminal4 = new TerminalExpression("D");
    // B Or C
    let alternation1 = new OrExpression(terminal2, terminal3);
    // A Or (B Or C)
    let alternation2 = new OrExpression(terminal1, alternation1);
    // D And (A Or (B Or C))
    return new AndExpression(terminal4, alternation2);
}

let define = buildInterpreterTree();
let context1 = "D A";
let context2 = "B C";
console.log(define.interpret(context1));
console.log(define.interpret(context2));
*/

/*
// 迭代器（Iterator）
import {
    ConcreteAggregate
} from "./js/Iterator.js";
let aggregate = new ConcreteAggregate();
let iterator = aggregate.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
*/

/*
// 中介者（Mediator）
import {
    Alarm,
    CoffeePot,
    Calender,
    Sprinkler,
    ConcreteMediator
} from "./js/Mediator.js";
let alarm = new Alarm();
let coffeePot = new CoffeePot();
let calender = new Calender();
let sprinkler = new Sprinkler();
let mediator = new ConcreteMediator(alarm, coffeePot, calender, sprinkler);
// 闹钟事件到达，调用中介者就可以操作相关对象
alarm.onEvent(mediator);
*/

/*
// 备忘录（Memento）
import {
    CalculatorImp
} from "./js/Memento.js";
let calculator = new CalculatorImp();

calculator.setFirstNumber(10);
calculator.setSecondNumber(100);
console.log(calculator.getCalculationResult());

let memento = calculator.backupLastCalculation();

calculator.setFirstNumber(17);
calculator.setSecondNumber(-290);
console.log(calculator.getCalculationResult());

calculator.restorePreviousCalculation(memento);
console.log(calculator.getCalculationResult());
*/

/*
// 观察者（Observer）
import {
    WeatherData,
    CurrentConditionsDisplay,
    StatisticsDisplay
} from "./js/Observer";
let weatherData = new WeatherData();
let currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
let statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(0, 0, 0);
weatherData.setMeasurements(1, 1, 1);
*/

/*
// 状态（State）
import {
    GumballMachine
} from "./js/State";
let gumballMachine = new GumballMachine(5);

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.ejectQuarter();

gumballMachine.insertQuarter();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
*/

/*
// 策略（Strategy）
import {
    Duck,
    Squeak,
    Quack
} from "./js/Strategy";
let duck = new Duck();
duck.setQuackBehavior(new Squeak());
duck.performQuack();
duck.setQuackBehavior(new Quack());
duck.performQuack();
*/


/*
// 模板方法（Template Method）
import {
    Coffee,
    Tea,
} from "./js/TemplateMethod";
let caffeineBeverage = new Coffee();
caffeineBeverage.prepareRecipe();

caffeineBeverage = new Tea();
caffeineBeverage.prepareRecipe();
*/

/*
// 访问者（Visitor）
import {
    Order,
    Item,
    Customer,
    CustomerGroup,
    GeneralReport
} from "./js/Visitor"
let customer1 = new Customer("customer1");
customer1.addOrder(new Order("order1", "item1"));
customer1.addOrder(new Order("order2", "item1"));
customer1.addOrder(new Order("order3", "item1"));

let order = new Order("order_a");
order.addItem(new Item("item_a1"));
order.addItem(new Item("item_a2"));
order.addItem(new Item("item_a3"));
let customer2 = new Customer("customer2");
customer2.addOrder(order);

let customers = new CustomerGroup();
customers.addCustomer(customer1);
customers.addCustomer(customer2);

let visitor = new GeneralReport();
customers.accept(visitor);
visitor.displayResults();
*/

/*
// 空对象（Null）
import {
    RealOperation,
    NullOperation,
} from "./js/Null";
let abstractOperation = func(-1);
abstractOperation.request();

function func(para) {
    if (para < 0) {
        return new NullOperation();
    }
    return new RealOperation();
}
*/


////////////////结构型模式////////////////
/*
// 适配器（Adapter）
import {
    WildTurkey,
    TurkeyAdapter
} from "./js/Adapter";
let turkey = new WildTurkey();
let duck = new TurkeyAdapter(turkey);
duck.quack();
*/

/*
// 桥接（Bridge）
import {
    RCA,
    ConcreteRemoteControl1
} from "./js/Bridge";
let remoteControl1 = new ConcreteRemoteControl1(new RCA());
remoteControl1.on();
remoteControl1.off();
remoteControl1.tuneChannel();
*/

/*
// 组合（Composite）
import {
    Composite,
    Leaf
} from "./js/Composite";
let root = new Composite("root");
let node1 = new Leaf("1");
let node2 = new Composite("2");
let node3 = new Leaf("3");
root.add(node1);
root.add(node2);
root.add(node3);

let node21 = new Leaf("21");
let node22 = new Composite("22");
node2.add(node21);
node2.add(node22);

let node221 = new Leaf("221");
node22.add(node221);

root.print();
*/

/*
// 装饰（Decorator）
import {
    HouseBlend,
    Milk,
    Mocha
} from "./js/Decorator";
let beverage = new HouseBlend();
beverage = new Mocha(beverage);
beverage = new Milk(beverage);
console.log(beverage.cost());
*/

/*
// 外观（Facade）
import {
    Facade
} from "./js/Facade";
let facade = new Facade();
facade.watchMovie();
*/


/*
// 享元（Flyweight）
import {
    FlyweightFactory
} from "./js/Flyweight";
let factory = new FlyweightFactory();
let flyweight1 = factory.getFlyweight("aa");
let flyweight2 = factory.getFlyweight("aa");
flyweight1.doOperation("x");
flyweight2.doOperation("y");
*/

/*
// 代理（Proxy）
import {
    ImageProxy,
    HighResolutionImage
} from "./js/Proxy";
let url = "http://image.jpg";
let highResolutionImage = new HighResolutionImage(url);
let imageProxy = new ImageProxy(highResolutionImage);
imageProxy.showImage();
*/