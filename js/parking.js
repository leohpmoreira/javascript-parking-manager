import Car from "./car.js";
import Motorcycle from "./motorcycle.js";

export default class Parking {
    constructor(_noSpots) {
        this._noSpots = _noSpots
        this._takenSpots = 0
        this._money = 0
        this._id = 0
        this._spotsArr = []
        this._logArr = []
    }

    get noSpots() {
        return this._noSpots;
    }

    get takenSpots() {
        return this._takenSpots;
    }

    get money() {
        return this._money;
    }

    get spotsArr() {
        return this._spotsArr;
    }

    get logArr() {
        return this._logArr;
    }

    park(type, plate, brand, color, owner, doors) {
        if (this._takenSpots >= this._noSpots) {
            alert('Parking lot is full')
            return
        }
        if (type === 'Car') {
            let vehicle = new Car (this._id, plate, brand, color, owner, doors)
            this._takenSpots += 1
            this._id += 1
            this._spotsArr.push(vehicle)
        }
        else {
            let vehicle = new Motorcycle (this._id, plate, brand, color, owner)
            this._takenSpots += 1
            this._id += 1
            this._spotsArr.push(vehicle)
        }
    }

    freeSpot(plate) {
        let index = this._spotsArr.findIndex(vehicle => vehicle.plate === plate)
        console.log(index)
        if (index === -1) {
            return -1
        }
        let vehicle = this._spotsArr[index]
        this._spotsArr.splice(index, 1)
        this._takenSpots -= 1
        let price = vehicle.computePrice()
        this._money += price
        this._logArr.push(vehicle)
        return price
    }
}