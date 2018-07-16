/**
 * 访问者（Visitor）
 */
class Element {
    constructor() {
        if(new.target == Element) {
            throw new Error('Element is an interface.');
        }
    }
    accept(visitor){}
}

class CustomerGroup {
    constructor(){
        this.customers = [];
    }
    accept(visitor) {
        this.customers.forEach(customer => {
            customer.accept(visitor);
        });
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
}

class Customer extends Element {
    constructor(name) {
        super();
        this.name = name;
        this.orders = [];
    }
    getName() {
        return this.name;
    }

    addOrder(order) {
        this.orders.push(order);
    }

    accept(visitor) {
        visitor.visit(this);
        this.orders.forEach(order => {
            order.accept(visitor);
        });
    }
}

class Order extends Element {
    constructor(name, itemName) {
        super();
        this.name = name;
        this.items = [];
        if(itemName){
            this.addItem(new Item(itemName));
        }
    }
    getName() {
        return this.name;
    }
    addItem(item) {
        this.items.push(item);
    }
    accept(visitor) {
        visitor.visit(this);
        this.items.forEach(item => {
            item.accept(visitor);
        });
    }
}

class Item extends Element {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}

class Visitor {
    constructor() {
        if(new.target == Visitor) {
            throw new Error('Visitor is an interface.');
        }
    }
    visit(visit){}
}

class GeneralReport extends Visitor {
    constructor() {
        super();
        this.customersNo = 0;
        this.ordersNo = 0;
        this.itemsNo = 0;
    }
    visit(visit) {
        console.log(visit.getName());
        
        switch(visit.constructor.name){
            case 'Customer':
                this.customersNo++;
                break;
            case 'Order':
                this.ordersNo++;
                break;
            case 'Item':
                this.itemsNo++;
                break;
        }
    }
    displayResults() {
        console.log("Number of customers: " + this.customersNo);
        console.log("Number of orders:    " + this.ordersNo);
        console.log("Number of items:     " + this.itemsNo);
    }
}

export {
    Order,
    Item,
    Customer,
    CustomerGroup,
    GeneralReport
}