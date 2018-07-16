/**
 * 桥接（Bridge）
 */
class TV {
    constructor() {
        if(new.target == TV) {
            throw new Error('TV is an abstract.');
        }
    }
    on(){}
    off(){}
    tuneChannel(){}
}

class Sony extends TV{
    constructor() {
        super();
    }
    on() {
        console.log("Sony.on()");
    }
    off() {
        console.log("Sony.off()");
    }
    tuneChannel() {
        console.log("Sony.tuneChannel()");
    }
}

class RCA extends TV{
    constructor() {
        super();
    }
    on() {
        console.log("RCA.on()");
    }
    off() {
        console.log("RCA.off()");
    }
    tuneChannel() {
        console.log("RCA.tuneChannel()");
    }
}

class RemoteControl {
    constructor(tv) {
        if(new.target == RemoteControl) {
            throw new Error('RemoteControl is an abstract.');
        }
        this.tv = tv;
    }
    on(){}
    off(){}
    tuneChannel(){}
}

class ConcreteRemoteControl1 extends RemoteControl {
    constructor(tv) {
        super(tv);
    }
    on() {
        console.log("ConcreteRemoteControl1.on()");
        this.tv.on();
    }
    off() {
        console.log("ConcreteRemoteControl1.off()");
        this.tv.off();
    }
    tuneChannel() {
        console.log("ConcreteRemoteControl1.tuneChannel()");
        this.tv.tuneChannel();
    }
}

class ConcreteRemoteControl2 extends RemoteControl {
    constructor(tv) {
        super(tv);
    }
    on() {
        console.log("ConcreteRemoteControl2.on()");
        this.tv.on();
    }
    off() {
        console.log("ConcreteRemoteControl2.off()");
        this.tv.off();
    }
    tuneChannel() {
        console.log("ConcreteRemoteControl2.tuneChannel()");
        this.tv.tuneChannel();
    }
}

export {
    Sony,
    RCA,
    ConcreteRemoteControl1,
    ConcreteRemoteControl2
}