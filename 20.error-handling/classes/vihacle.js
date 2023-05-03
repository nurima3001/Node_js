export default class Vihacle {
    engineStatus;
    engineVolume;

    constructor(engineVolume) {
        this.engineStatus = false;
        this.engineVolume = enginevolume;
    }

    turnOnEngine() {
        this.engineStatus = true;
        console.log('Engine is on');
    }

    turnOffEngine() {
        this.engineStatus = false;
        console.log('Engine is off');
    }

    firedHorn() {
        console.log('Beep beep');
    }
}