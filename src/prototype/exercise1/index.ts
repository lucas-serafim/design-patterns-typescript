interface Shape {
    clone(): Shape;
}

class Circle implements Shape {

    private radius: number = 0.0;

    constructor(radius: number) {
        this.radius = radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }

    getRadius() {
        return this.radius;
    }

    clone(): Shape {
        return new Circle(this.radius);
    }
}

class Rectangle implements Shape {

    private width: number = 0.0;
    private height: number = 0.0;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(value: number) {
        this.width = value;
    }

    setHeight(value: number) {
        this.height = value;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    clone(): Shape {
        return new Rectangle(this.width, this.height);
    }
}

console.log("<------Circle------>")
const circle = new Circle(1.52);
console.log(circle.getRadius());
circle.setRadius(2.50);
console.log(circle.getRadius());

const newCircle = circle.clone() as Circle;
console.log(newCircle.getRadius());
newCircle.setRadius(3.5067);
console.log(newCircle.getRadius());

console.log(circle === newCircle);

console.log("<------Rectangle------>")

const rectangle = new Rectangle(1.50, 3.50);
console.log(rectangle.getWidth(), rectangle.getHeight());
rectangle.setWidth(2.50);
rectangle.setHeight(5.00);
console.log(rectangle.getWidth(), rectangle.getHeight());

const newRectangle = rectangle.clone() as Rectangle;
console.log(newRectangle.getWidth(), newRectangle.getHeight());
newRectangle.setWidth(2.50);
newRectangle.setHeight(5.00);
console.log(newRectangle.getWidth(), newRectangle.getHeight());

console.log(rectangle === newRectangle);
