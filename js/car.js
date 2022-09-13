import Vehicle from "./vehicle.js";

export default class Car extends Vehicle {
    constructor(id, plate, brand, color, owner, doors) {
        super(id, plate, brand, color, owner);
        this._doors = doors
    }

    get doors() {
        return this._doors;
    }

    computePrice() {
        this._outTime = new Date()
        let duration = (this._outTime - this._entranceTime)/60000 // Convert duration to minutes
        if (duration <= 15) {
            return 0
        }
        else {
            if (duration <= 240) {
                return Math.ceil(duration/60) * 4
            }
            else {
                return 20
            }
        }
    }

    toString() {
        return this._id + " " + this._plate +  this._brand + " " +  this._color + " " + this._owner + " " + this._doors
    }
}