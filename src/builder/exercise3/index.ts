/*
    Exercício Difícil: Builder para um Carro com Componentes Modulares

    Implemente um Builder para um objeto Car, com os seguintes atributos:

        engine (V6, V8, Elétrico)
        transmission (Automática, Manual)
        color
        hasSunroof (Sim/Não)
        hasGPS (Sim/Não)
        hasHeatedSeats (Sim/Não)

    Além disso, o Builder deve permitir criar modelos predefinidos de carro (sportsCar e economyCar)
*/

enum CarEngineEnum {
    v6 = "V6",
    v8 = "V8",
    eletrico = "Elétrico"
}

enum CarTransmissionEnum {
    auto = "Automática",
    manual = "Manual"
}

class Car {
    constructor(
        private readonly engine: CarEngineEnum,
        private readonly transmission: CarTransmissionEnum,
        private readonly color: string,
        private readonly hasSunroof: boolean,
        private readonly hasGPS: boolean,
        private readonly hasHeatedSeats: boolean
    ) { };

    toString() {
        console.log(`motor: ${this.engine}, transmissão: ${this.transmission}, cor: ${this.color}, tem teto panorâmico: ${this.hasSunroof ? "sim" : "não"}, tem gps: ${this.hasGPS ? "sim" : "não"}, tem assento aquecido: ${this.hasHeatedSeats ? "sim" : "não"}`);
    }
}

class CarBuilder {
    private engine: CarEngineEnum = CarEngineEnum.v6;
    private transmission: CarTransmissionEnum = CarTransmissionEnum.auto;
    private color: string = "black";
    private hasSunroof: boolean = false;
    private hasGPS: boolean = false;
    private hasHeatedSeats: boolean = false;

    sportsCar(): this {
        this.engine = CarEngineEnum.v8;
        this.transmission = CarTransmissionEnum.auto;
        this.color = "black";
        this.hasSunroof = false;
        this.hasGPS = true;
        this.hasHeatedSeats = true;

        return this;
    }

    economyCar(): this {
        this.engine = CarEngineEnum.v6;
        this.transmission = CarTransmissionEnum.manual;
        this.color = "blue";
        this.hasSunroof = true;
        this.hasGPS = true;
        this.hasHeatedSeats = false;

        return this;
    }

    setEngine(engine: CarEngineEnum): this {
        this.engine = engine;
        return this;
    }

    setTransmission(transmission: CarTransmissionEnum): this {
        this.transmission = transmission;
        return this;
    }

    setColor(color: string): this {
        this.color = color;
        return this;
    }

    setHasSunroof(hasSunroof: boolean): this {
        this.hasSunroof = hasSunroof;
        return this;
    }

    setHasGPS(hasGPS: boolean): this {
        this.hasGPS = hasGPS;
        return this;
    }

    setHasHeatedSeats(hasHeatedSeats: boolean): this {
        this.hasHeatedSeats = hasHeatedSeats;
        return this;
    }

    build(): Car {
        return new Car(this.engine, this.transmission, this.color, this.hasSunroof, this.hasGPS, this.hasHeatedSeats);
    }
}

const sportsCar = new CarBuilder().sportsCar().build();
sportsCar.toString();

const economyCar = new CarBuilder().economyCar().build();
economyCar.toString();