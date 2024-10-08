class Circle {
    radius;

    constructor(value) {
        this.radius = value;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
