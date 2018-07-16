/*
 * 外观（Facade）
 */
class SubSystem {
    constructor(){
    }
    turnOnTV() {
        console.log("turnOnTV()");
    }
    setCD(cd) {
        console.log("setCD(" + cd + ")");
    }
    starWatching(){
        console.log("starWatching()");
    }
}

class Facade {
    constructor(){
        this.subSystem = new SubSystem();
    }
    watchMovie() {
        this.subSystem.turnOnTV();
        this.subSystem.setCD("a movie");
        this.subSystem.starWatching();
    }
}

export {
    Facade
}