import Vihacle from "./vihacle.js";

export default class Car extends
Vihacle {
    type 
    brand
    color 

    constructor(brand,color,type,engineVolume) {

    super(engineVolume);
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.engineStatus = false;
    }

   
}