export default class Vehicle {
    constructor(id, plate, brand, color, owner) {
        this._id = id
        this._plate = plate
        this._brand = brand
        this._color = color
        this._owner = owner
        this._entranceTime = new Date()
        this._outTime = undefined
    }

    get id() {
        return this._id;
    }

    get plate() {
        return this._plate;
    }

    get brand() {
        return this._brand;
    }

    get color() {
        return this._color;
    }

    get owner() {
        return this._owner;
    }

    get entranceTime() {
        return this._entranceTime;
    }

    get outTime() {
        return this._outTime;
    }
}

