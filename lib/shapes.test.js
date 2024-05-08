const { Circle, Triangle } = require("./shapes");

describe("Circle", () => {
  it("should create a circle filled with purple", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="purple" />'
    );
  });
});

describe("Triangle", () => {
  it("should create a triangle filled with blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
