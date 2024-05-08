const { Circle, Triangle, Square } = require("./shapes");

// Unit test circle
describe("Circle", () => {
  it("should create a circle filled with purple", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill = "purple"/>'
    );
  });
});

// Unit test Triangle
describe("Triangle", () => {
  it("should create a triangle filled with blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit test Square
describe("Square", () => {
  it("should create a sqaure filled with pink", () => {
    const shape = new Square();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<rect x="100" y="50" width="100" height="100" fill="pink" />'
    );
  });
});

