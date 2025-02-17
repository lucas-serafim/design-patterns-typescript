
interface Prototype {
    clone(): Prototype;
}

interface PrototypeRegistry {
    addPrototype(key: string, prototype: Prototype): void;

    getPrototype(key: string): Prototype | null;
}

class ShapeRegistry implements PrototypeRegistry {
    private shapes: Map<string, Prototype> = new Map();

    addPrototype(key: string, prototype: Prototype): void {
        this.shapes.set(key, prototype);
    }

    getPrototype(key: string): Prototype | null {
        const prototype = this.shapes.get(key);
        return prototype ? prototype.clone() : null;
    }
}

class Circle implements Prototype {
    private radius: number = 0.0;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    clone(): Prototype {
        return new Circle(this.radius);
    }
}

class Rectangle implements Prototype {

    private width: number = 0.0;
    private height: number  = 0.0;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    clone(): Prototype {
        return new Rectangle(this.width, this.height);
    }
}

const shapeRegistry = new ShapeRegistry();

shapeRegistry.addPrototype("circle", new Circle(10.1));

const circleClone = shapeRegistry.getPrototype("circle") as Circle;

const cloneRadius = circleClone.getRadius();
console.log("🚀 ~ cloneRadius:", cloneRadius)

shapeRegistry.addPrototype("rectangle", new Rectangle(10, 15));

const rectangleClone = shapeRegistry.getPrototype("rectangle") as Rectangle;

const rectangleWidth = rectangleClone.getWidth();
console.log("🚀 ~ rectangleWidth:", rectangleWidth)

const rectangleHeight = rectangleClone.getHeight(); 
console.log("🚀 ~ rectangleHeight:", rectangleHeight)
