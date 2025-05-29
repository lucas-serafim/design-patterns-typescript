/*
    2. Exercício Médio: Builder para um Pedido de Pizza

    Agora, crie um Builder para um objeto Pizza, que pode ter:

        size (Pequena, Média, Grande)
        cheese (Sim/Não)
        toppings (array de ingredientes opcionais)
        stuffedCrust (Borda recheada: Sim/Não)
*/

enum pizzaSize {
    P = "pequena",
    M = "média",
    G = "grande"
}

class Pizza {
    private size: pizzaSize;
    private cheese: boolean;
    private toppings: Array<string>;
    private stuffedCrust: boolean;

    constructor(size: pizzaSize, cheese: boolean, toppings: Array<string>, stuffedCrust: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.toppings = toppings;
        this.stuffedCrust = stuffedCrust;
    }
}

class PizzaBuilder {
    private size: pizzaSize = pizzaSize.G;
    private cheese: boolean = false;
    private toppings: Array<string> = [];
    private stuffedCrust: boolean = false;

    setSize(size: pizzaSize): this {
        this.size = size;
        return this;
    }

    addTopping(topping: string): this {
        this.toppings.push(topping);
        return this;
    }

    setCheese(cheese: boolean): this {
        this.cheese = cheese;
        return this;
    }

    setStuffedCrust(stuffedCrust: boolean): this {
        this.stuffedCrust = stuffedCrust;
        return this;
    }

    build() {
        return new Pizza(this.size, this.cheese, this.toppings, this.stuffedCrust);
    }
}

const pizza = new PizzaBuilder()
    .setSize(pizzaSize.G)
    .addTopping("Pepperoni")
    .addTopping("Bacon")
    .setCheese(true)
    .setStuffedCrust(true)
    .build();

console.log("🚀 ~ pizza:", pizza)
