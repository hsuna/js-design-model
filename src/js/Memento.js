/**
 * 备忘录（Memento）
 */
class Calculator {
    constructor() {
        if(new.target == Calculator) {
            throw new Error('Calculator is an interface.');
        }
    }
    backupLastCalculation(){}
    restorePreviousCalculation(memento){}
    getCalculationResult(){}
    setFirstNumber(firstNumber){}
    setSecondNumber(secondNumber){}
}

class CalculatorImp extends Calculator {
    constructor() {
        super();
    }
    backupLastCalculation() {
        return new PreviousCalculationImp(this.firstNumber, this.secondNumber);
    }
    restorePreviousCalculation(memento) {
        this.firstNumber = memento.getFirstNumber();
        this.secondNumber = memento.getSecondNumber();
    }
    getCalculationResult() {
        return this.firstNumber + this.secondNumber;
    }    
    setFirstNumber(firstNumber) {
        this.firstNumber = firstNumber;
    }
    setSecondNumber(secondNumber) {
        this.secondNumber = secondNumber;
    }
}

class PreviousCalculation {
    constructor() {
        if(new.target == PreviousCalculation) {
            throw new Error('PreviousCalculation is an interface.');
        }
    }
    getFirstNumber(){}
    getSecondNumber(){}
}

class PreviousCalculationImp extends PreviousCalculation {
    constructor(firstNumber, secondNumber) {
        super();
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    getFirstNumber() {
        return this.firstNumber;
    }
    getSecondNumber() {
        return this.secondNumber;
    }
}

export {
    CalculatorImp
}