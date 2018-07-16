/**
 * 中介者（Mediator）
 */

class Colleague {
    constructor() {
        if(new.target == Colleague) {
            throw new Error('Colleague is an interface.');
        }
    }
    onEvent(mediator){}
}

class Alarm extends Colleague {
    constructor() {
        super();
    }
    onEvent(mediator) {
        mediator.doEvent("alarm");
    }
    doAlarm() {
        console.log("doAlarm");
    }
}

class CoffeePot extends Colleague {
    constructor() {
        super();
    }
    onEvent(mediator) {
        mediator.doEvent("coffeePot");
    }
    doCoffeePot() {
        console.log("doCoffeePot");
    }
}

class Calender extends Colleague {
    constructor() {
        super();
    }
    onEvent(mediator) {
        mediator.doEvent("calender");
    }
    doCalender() {
        console.log("doCalender");
    }
}

class Sprinkler extends Colleague {
    constructor() {
        super();
    }
    onEvent(mediator) {
        mediator.doEvent("sprinkler");
    }
    doSprinkler() {
        console.log("doSprinkler");
    }
}

class Mediator {
    constructor() {
        if(new.target == Mediator) {
            throw new Error('Mediator is an interface.');
        }
    }
    doEvent(eventType){}
}

class ConcreteMediator extends Mediator {
    constructor(alarm, coffeePot, calender, sprinkler){
        super();
        this.alarm = alarm;
        this.coffeePot = coffeePot;
        this.calender = calender;
        this.sprinkler = sprinkler;
    }
    doEvent(eventType) {
        switch (eventType) {
            case "alarm":
                this.doAlarmEvent();
                break;
            case "coffeePot":
                this.doCoffeePotEvent();
                break;
            case "calender":
                this.doCalenderEvent();
                break;
            case "sprinkler":
                this.doSprinklerEvent();
                break;
        }
    }
    doAlarmEvent() {
        this.coffeePot.doCoffeePot();
        this.calender.doCalender();
        this.sprinkler.doSprinkler();
    }
    doCoffeePotEvent() {
        this.alarm.doAlarm();
        this.coffeePot.doCoffeePot();
    }
    doCalenderEvent() {
        this.alarm.doAlarm();
        this.coffeePot.doCoffeePot();
        this.sprinkler.doSprinkler();
    }
    doSprinklerEvent() {
        this.alarm.doAlarm();
        this.calender.doCalender();
    }
}

export {
    Alarm,
    CoffeePot,
    Calender,
    Sprinkler,
    ConcreteMediator
}