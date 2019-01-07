/**
 * 状态（State）
 */
class State {
    constructor() {
        if(new.target == State) {
            throw new Error('State is an interface.');
        }
    }
    insertQuarter(){}
    ejectQuarter(){}
    turnCrank(){}
    dispense(){}
}

class HasQuarterState extends State {
    constructor(gumballMachine) {
        super();
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You can't insert another quarter");
    }
    ejectQuarter() {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
    turnCrank() {
        console.log("You turned...");
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
    dispense() {
        console.log("No gumball dispensed");
    }
}

class NoQuarterState extends State {
    constructor(gumballMachine) {
        super();
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You insert a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }
    ejectQuarter() {
        console.log("You haven't insert a quarter");
    }
    turnCrank() {
        console.log("You turned, but there's no quarter");
    }
    dispense() {
        console.log("You need to pay first");
    }
}

class SoldState extends State {
    constructor(gumballMachine) {
        super();
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You insert a quarter");
    }
    ejectQuarter() {
        console.log("You haven't insert a quarter");
    }
    turnCrank() {
        console.log("You turned, but there's no quarter");
    }
    dispense() {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        } else {
            console.log("Oops, out of gumballs");
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }
}

class SoldOutState extends State {
    constructor(gumballMachine) {
        super();
        this.gumballMachine = gumballMachine;
    }
    insertQuarter() {
        console.log("You insert a quarter");
    }
    ejectQuarter() {
        console.log("You haven't insert a quarter");
    }
    turnCrank() {
        console.log("You turned, but there's no quarter");
    }
    dispense() {
        console.log("You need to pay first");
    }
}

class GumballMachine {
    constructor(numberGumballs) {
        this.count = numberGumballs;
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);

        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }
    insertQuarter() {
        this.state.insertQuarter();
    }
    ejectQuarter() {
        this.state.ejectQuarter();
    }
    turnCrank() {
        this.state.turnCrank();
        this.state.dispense();
    }
    setState(state) {
        this.state = state;
    }
    releaseBall() {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count -= 1;
        }
    }
    getSoldOutState() {
        return this.soldOutState;
    }
    getNoQuarterState() {
        return this.noQuarterState;
    }
    getHasQuarterState() {
        return this.hasQuarterState;
    }
    getSoldState() {
        return this.soldState;
    }
    getCount() {
        return this.count;
    }
}

export {
    GumballMachine
}