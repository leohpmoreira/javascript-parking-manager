import Parking from "./parking.js";

function hideMenu() {
    menuDiv.style.display = 'none'
}

function showMenu() {
    menuDiv.style.display = 'flex'
}

function showParking() {
    parkingDiv.style.display = 'flex'
}

function hideParking() {
    parkingDiv.style.display = 'none'
    motorcycleRadio.checked = false
    carRadio.checked = false
    newPlate.value = ''
    newBrand.value = ''
    newColor.value = ''
    newOwner.value = ''
    newDoors.value = ''
}

function enableDoors() {
    newDoors.style.opacity = '1'
}

function disableDoors() {
    newDoors.style.opacity = '0'
}

function showFree() {
    freeDiv.style.display = 'flex'
    parkingLot.spotsArr.forEach(vehicle => {
        let row = parkedTableBody.insertRow()
        let id = row.insertCell(0)
        id.innerHTML = vehicle.id
        let plate = row.insertCell(1)
        plate.innerHTML = vehicle.plate
        let brand = row.insertCell(2)
        brand.innerHTML = vehicle.brand
        let color = row.insertCell(3)
        color.innerHTML = vehicle.color
        let owner = row.insertCell(4)
        owner.innerHTML = vehicle.owner
        let entranceTime = row.insertCell(5)
        entranceTime.innerHTML = vehicle.entranceTime.getHours() + ":" +  vehicle.entranceTime.getMinutes()
    })
}

function hideFree() {
    freeDiv.style.display = 'none'
    parkedTableBody.innerHTML = ''
    freePlate.value = ''
}

function showReport() {
    reportDiv.style.display = 'flex'
    parkingLot.logArr.forEach(vehicle => {
        let row = reportTableBody.insertRow()
        let id = row.insertCell(0)
        id.innerHTML = vehicle.id
        let plate = row.insertCell(1)
        plate.innerHTML = vehicle.plate
        let brand = row.insertCell(2)
        brand.innerHTML = vehicle.brand
        let color = row.insertCell(3)
        color.innerHTML = vehicle.color
        let owner = row.insertCell(4)
        owner.innerHTML = vehicle.owner
        let entranceTime = row.insertCell(5)
        entranceTime.innerHTML = vehicle.entranceTime.getHours() + ":" +  vehicle.entranceTime.getMinutes()
        let outTime = row.insertCell(6)
        outTime.innerHTML = vehicle.outTime.getHours() + ":" +  vehicle.outTime.getMinutes()
    })
    parkingLot.spotsArr.forEach(vehicle => {
        let row = reportTableBody.insertRow()
        let id = row.insertCell(0)
        id.innerHTML = vehicle.id
        let plate = row.insertCell(1)
        plate.innerHTML = vehicle.plate
        let brand = row.insertCell(2)
        brand.innerHTML = vehicle.brand
        let color = row.insertCell(3)
        color.innerHTML = vehicle.color
        let owner = row.insertCell(4)
        owner.innerHTML = vehicle.owner
        let entranceTime = row.insertCell(5)
        entranceTime.innerHTML = vehicle.entranceTime.getHours() + ":" +  vehicle.entranceTime.getMinutes()
        let outTime = row.insertCell(6)
        outTime.innerHTML = ''
    })
}

function hideReport() {
    reportDiv.style.display = 'none'
    reportTableBody.innerHTML = ''
}

function showIncome() {
    incomeDiv.style.display = 'flex'
    incomeText.innerHTML = '$' + parkingLot.money
}

function hideIncome() {
    incomeDiv.style.display = 'none'
}

//Parking lot with 20 spots
let parkingLot = new Parking(20)

const menuDiv = document.getElementById('menuDiv')

// Park vehicle elements
const parkingDiv = document.getElementById('parkingDiv')
const parkButton = document.getElementById('parkButton')
const carRadio = document.getElementById('newCar')
const motorcycleRadio = document.getElementById('newMotorcycle')
const newPlate = document.getElementById('newPlate')
const newBrand = document.getElementById('newBrand')
const newColor = document.getElementById('newColor')
const newOwner = document.getElementById('newOwner')
const newDoors = document.getElementById('newDoors')
const cancelParkBtn = document.getElementById('cancelPark')
const acceptParkBtn = document.getElementById('acceptPark')

// Free spot elements
const freeDiv = document.getElementById('freeDiv')
const freeButton = document.getElementById('freeButton')
const freePlate = document.getElementById('freePlate')
const cancelFreeBtn = document.getElementById('cancelFree')
const searchFreeBtn = document.getElementById('searchFree')
let parkedTableBody = document.getElementById('parkedTableBody')

// Report elements
const reportDiv = document.getElementById('reportDiv')
const reportButton = document.getElementById('reportButton')
const reportTableBody = document.getElementById('reportTableBody')
const returnReportBtn = document.getElementById('returnReport')

// Income elements
const incomeDiv = document.getElementById('incomeDiv')
const incomeButton = document.getElementById('incomeButton')
const returnIncome = document.getElementById('returnIncome')
const incomeText = document.getElementById('totalIncome')

parkButton.addEventListener('click', () => {
    hideMenu()
    showParking()
})

cancelParkBtn.addEventListener('click', () => {
    hideParking()
    showMenu()
})

acceptParkBtn.addEventListener('click', () => {
    if (newPlate.value === '' || newBrand.value === '' || newColor.value === '' || newOwner.value === '') {
        alert('Missing information')
        return
    }
    if (carRadio.checked) {
        if (newDoors.value === '') {
            alert('Missing information')
            return
        }
        parkingLot.park('Car', newPlate.value, newBrand.value, newColor.value, newOwner.value, newDoors.value)
    }
    else {
        if (motorcycleRadio.checked) {
            parkingLot.park('Motorcycle', newPlate.value, newBrand.value, newColor.value, newOwner.value)
        }
        else {
            alert('Vehicle type not selected')
        }
    }
    hideParking()
    showMenu()
})

carRadio.addEventListener('click', enableDoors)

motorcycleRadio.addEventListener('click', disableDoors)

freeButton.addEventListener('click', () => {
    hideMenu()
    showFree()
})

cancelFreeBtn.addEventListener('click', () => {
    hideFree()
    showMenu()
})

searchFreeBtn.addEventListener('click', () => {
    if (freePlate.value === '') {
        alert('No plate entered')
        return
    }
    let price = parkingLot.freeSpot(freePlate.value.toLocaleUpperCase())
    if (price === -1) {
        alert('Car not found')
    }
    else {
        alert('Total: $' + price)
    }
    hideFree()
    showMenu()
})

reportButton.addEventListener('click', () => {
    hideMenu()
    showReport()
})

returnReportBtn.addEventListener('click', () => {
    hideReport()
    showMenu()
})

incomeButton.addEventListener('click', () => {
    hideMenu()
    showIncome()
})

returnIncome.addEventListener('click', () => {
    hideIncome()
    showMenu()
})


// Test entries
parkingLot.park('Car', 'FTR5198', 'Nissan', 'Grey', 'Fiachrae', 4)
parkingLot.park('Car', 'YXC5934', 'Volkswagen', 'Green', 'Konrad', 4)
parkingLot.park('Car', 'CJB6060', 'GMC', 'Grey', 'Éva', 4)
parkingLot.park('Car', '2GKJ848', 'Chevrolet', 'Beige', 'Job', 4)
parkingLot.park('Car', '8DNH403', 'Hyundai', 'Aluminium', 'Nanda', 4)
parkingLot.park('Car', '5XJY822', 'BMW', 'Blue', 'Hunor', 4)
parkingLot.park('Motorcycle', '110BVC', 'Yamaha', 'Grey', 'Mario')
parkingLot.park('Motorcycle', '2CST705', 'Suzuki', 'Black', 'Eden')
