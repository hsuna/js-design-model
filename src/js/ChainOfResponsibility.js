/**
 * 责任链（Chain Of Responsibility）
 */
const RequestType = {
    type1: Symbol('type1'),
    type2: Symbol('type2'),
}

class Request {
    constructor(type, name){
        this._type = type;
        this._name = name;
    }
    get type(){
        return this._type;
    }
    get name(){
        return this._name;
    }
}

class Handler {
    constructor(successor){
        this.successor = successor;
    }
    handleRequest(request){
        if(this.successor){
            this.successor.handleRequest(request);   
        }
    }
}

class ConcreteHandler1 extends Handler {
    constructor(successor){
        super(successor);
    }
    handleRequest(request){
        if(request.type == RequestType.type1){
            console.log(`${request.name} is handle by ConcreteHandler1`);
            return;
        }
        super.handleRequest(request);
    }
}

class ConcreteHandler2 extends Handler {
    constructor(successor){
        super(successor);
    }
    handleRequest(request){
        if(request.type == RequestType.type2){
            console.log(`${request.name} is handle by ConcreteHandler2`);
            return;
        }
        super.handleRequest(request);
    }
}


export {
    RequestType,
    Request,
    ConcreteHandler1,
    ConcreteHandler2
}
