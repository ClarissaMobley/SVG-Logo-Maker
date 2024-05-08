// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Make shape class with a color constructor
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

// Circle shape
class Circle extends Shape {
    render() {
        return `<cir cx="200" cy="200" r="80" fill = ${this.color}"/>`;
    }
}

// Triangle shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
