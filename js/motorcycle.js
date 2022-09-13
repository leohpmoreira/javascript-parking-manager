import Vehicle from "./vehicle.js";

export default class Motorcycle extends Vehicle{
    constructor(id, plate, brand, color, owner) {
        super(id, plate, brand, color, owner);
    }

    computePrice() {
        this._outTime = new Date()
        let duration = (this._outTime - this._entranceTime)/60000  // Convert duration to minutes
        if (duration <= 30) {
            return 0
        }
        else {
            if (duration <= 240) {
                return Math.ceil(duration/60) * 2
            }
            else {
                return 10
            }
        }
    }

    toString() {
        return this._id + " " + this._plate +  this._brand + " " +  this._color + " " + this._owner
    }
}