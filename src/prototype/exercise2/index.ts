enum currencyTypes {
    brl = "BRL",
    usd = "USD"
}

class Price {
    private value: number = 0;
    private currency: string = "";

    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    setValue(value: number) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setCurrency(value: string) {
        this.currency = value;
    }

    getCurrency() {
        return this.currency;
    }
}

class Product {

    private name: string;
    private category: string;
    private price: Price;

    constructor(name: string, category: string, price: Price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    setName(value: string) {
        this.name = value;
    }

    getName() {
        return this.name;
    }

    setCategory(value: string) {
        this.category = value;
    }

    getCategory() {
        return this.category;
    }

    setPrice(value: number, currency: string) {
        this.price.setValue(value);
        this.price.setCurrency(currency);
    }

    getPrice() {
        return this.price;
    }

    getProduct() {
        return {
            name: this.name,
            category: this.category,
            price: {
                value: this.price.getValue(),
                currency: this.price.getCurrency()
            }
        }
    }

    clone() {
        return new Product(this.name, this.category, new Price(this.price.getValue(), this.price.getCurrency()));
    }
}

const product = new Product("televisão", "eletronico", new Price(1900.00, currencyTypes.brl));
console.log(product.getProduct());

const newProduct = product.clone();
newProduct.setPrice(2599.90, currencyTypes.usd);
console.log(newProduct.getProduct());

console.log(product.getProduct());

console.log("Is product equal: ", product === newProduct);
console.log("Is price equal: ", product.getPrice() === newProduct.getPrice());