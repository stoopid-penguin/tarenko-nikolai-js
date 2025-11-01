//1
class Boat {
    constructor(color, material, maxSpeed) {
        this.color = color;
        this.material = material;
        this.maxSpeed = maxSpeed;
    }
    sail() {
        console.log("Плывём по волнам!")
    }
}
Boat.sail();
console.log("///////////");

//2
class Transport {
    constructor(color, material, manufacturer, speed) {
        this.color = color;
        this.material = material;
        this.manufacturer = manufacturer;
        this.speed = speed;
    }
    startEngine() {
        console.log('Турбины запускаются...')
    }
    showCharacteristics() {
        for (var prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                console.log(` ${prop}: ${this[prop]}`)
            }
        }
    }
}

class Bus extends Transport {
    constructor(color, material, manufacturer, passengerCount) {
        super(color, material, manufacturer);
        this.passengerCount = passengerCount;
    }
    drive() {
        let X = this.passengerCount
        console.log(`Едем по маршруту с ${X} пассажирами`)
    }
}
const Krasnobus = new Bus('res', 'aluminum', 'hz', 50);

Krasnobus.drive()
console.log("///////////")

//3
class Plane extends Transport {
    constructor(color, material, manufacturer, maxSpeed, maxHeight) {
        super(color,material,manufacturer)
        this.maxSpeed = maxSpeed
        this.maxHeight = maxHeight
    }
    fly() {
        console.log('Flying...')
    }
    startEngine() {
        super.startEngine()
    }
}

const Tu144 = new Plane('white', 'iron', 'Typolev', 1500, 12000);
Tu144.startEngine();