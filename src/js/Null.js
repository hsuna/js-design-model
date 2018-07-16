/**
 * 空对象（Null）
 */
class AbstractOperation {
    constructor() {
        if(new.target == AbstractOperation) {
            throw new Error('AbstractOperation is an interface.');
        }
    }
    request(){}
}

class RealOperation extends AbstractOperation {
    constructor() {
        super();
    }
    request() {
        console.log("do something");
    }
}

class NullOperation extends AbstractOperation{
    constructor() {
        super();
    }
    request() {
        // do nothing
    }
}

export {
    RealOperation,
    NullOperation
}