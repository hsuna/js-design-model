/**
 * 命令（Command）
 */
class Command {
    constructor() {
        if(new.target == Command) {
            throw new Error('Command is an interface.');
        }
    }
    execute(){}
}

class LightOnCommand extends Command {
    constructor(light){
        super();
        this.light = light;
    }
    execute(){
        this.light.on();
    }
}

class LightOffCommand extends Command {
    constructor(light){
        super();
        this.light = light;
    }
    execute(){
        this.light.off();
    }
}

class Light {
    constructor(){}
    on(){
        console.log('Light is on!');
    }
    off(){
        console.log('Light is off!');
    }
}

class Invoker {
    constructor(){
        const SLOT_NUM = 7;
        this.onCommands = new Array(SLOT_NUM);
        this.offCommands = new Array(SLOT_NUM);
    }
    setOnCommand(command, slot) {
        this.onCommands[slot] = command;
    }
    setOffCommand(command, slot) {
        this.offCommands[slot] = command;
    }
    onButtonWasPushed(slot){
        this.onCommands[slot].execute();
    }
    offButtonWasPushed(slot){
        this.offCommands[slot].execute();
    }
}

export {
    Invoker,
    Light,
    LightOnCommand,
    LightOffCommand
}