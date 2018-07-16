/**
 * 解释器（Interpreter）
 */
class Expression{
    constructor() {
        if(new.target == Expression) {
            throw new Error('Expression is an interface.');
        }
    }
    interpret(str){}
}

class TerminalExpression extends Expression {
    constructor(str) {
        super();
        this.literal = str;
    }
    interpret(str) {
        let list = str.split(' ');
        for(let i=0, len=list.length; i<len; i++){
            if(list[i] == this.literal){
                return true;
            }
        }
        return false;
    }
}

class AndExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    interpret(str) {
        return this.expression1.interpret(str) && this.expression2.interpret(str);
    }
}

class OrExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    interpret(str) {
        return this.expression1.interpret(str) || this.expression2.interpret(str);
    }
}

export {
    TerminalExpression,
    OrExpression,
    AndExpression
}