/**
 * 观察者（Observer）
 */
class Subject {
    constructor() {
        if(new.target == Subject) {
            throw new Error('Subject is an interface.');
        }
    }
    resisterObserver(observer){}
    removeObserver(observer){}
    notifyObserver(){}
}

class WeatherData extends Subject {
    constructor() {
        super();
        this.observers = new Array();
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObserver();
    }
    resisterObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if(-1 != index){
            this.observers.splice(index, 1);
        }
    }
    notifyObserver(){
        this.observers.forEach(observer => {
            observer.update(this.temperature, this.humidity, this.pressure)
        });
    }
}

class Observer {
    constructor() {
        if(new.target == Observer) {
            throw new Error('Observer is an interface.');
        }
    }
    update(temperature, humidity, pressure){}
}

class StatisticsDisplay extends Observer {
    constructor(weatherData) {
        super();
        weatherData.resisterObserver(this);
    }
    update(temperature, humidity, pressure) {
        console.log(`StatisticsDisplay.update: ${temperature}, ${humidity}, ${pressure}`);
    }
}

class CurrentConditionsDisplay extends Observer {
    constructor(weatherData) {
        super();
        weatherData.resisterObserver(this);
    }
    update(temperature, humidity, pressure) {
        console.log(`CurrentConditionsDisplay.update: ${temperature}, ${humidity}, ${pressure}`);
    }
}

export {
    WeatherData,
    CurrentConditionsDisplay,
    StatisticsDisplay
}