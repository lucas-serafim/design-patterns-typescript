interface VehicleImpl {
    drive(): string;
}

class Car implements VehicleImpl {
    drive(): string {
        return "Driving a car";
    }
}

class Bike implements VehicleImpl {
    drive(): string {
        return "Riding a bike";
    }
}

class VehicleFactory {
    public static createVehicle(type: string): VehicleImpl {
        switch(type) {
            case "car":
                return new Car();

            case "bike":
                return new Bike();

            default:
                throw new Error(`Invalid vehicle type: ${type}. Valid types are "car" or "bike".`);
        }
    }
}

const car1 = VehicleFactory.createVehicle("car");
console.log(car1.drive());

const bike1 = VehicleFactory.createVehicle("bike");
console.log(bike1.drive());

try {
    VehicleFactory.createVehicle("truck");
} catch (error) {
    console.error(error);
}