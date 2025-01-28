interface Engine {
    start(): void;
}

interface Wheel {
    roll(): void;
}

class CarEngine implements Engine {
    start(): void {
        console.log("Start car engine.")
    }
}

class TruckEngine implements Engine {
    start(): void {
        console.log("Start truck engine.")
    }
}

class CarWheel implements Wheel {
    roll(): void {
        console.log("Roll car wheel.")
    }
}

class TruckWheel implements Wheel {
    roll(): void {
        console.log("Roll truck wheel.")
    }
}

interface VehicleFactory {
    createEngine(): Engine;
    createWheel(): Wheel;
}

class CarFactory implements VehicleFactory {
    createEngine(): Engine {
        return new CarEngine();
    }

    createWheel(): Wheel {
        return new CarWheel();
    }
}

class TruckFactory implements VehicleFactory {
    createEngine(): Engine {
        return new TruckEngine();
    }

    createWheel(): Wheel {
        return new TruckWheel();
    }
}

class Vehicle {
    private factory: VehicleFactory;

    constructor(factory: VehicleFactory) {
        this.factory = factory;
    }

    create() {
        this.factory.createEngine().start();
        this.factory.createWheel().roll();
    }
}

const truck = new TruckFactory();
const vehicle1 = new Vehicle(truck);
vehicle1.create();

const car = new CarFactory();
const vehicle2 = new Vehicle(car);
vehicle2.create();