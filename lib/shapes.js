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
    return `<circle cx="150" cy="100" r="80" fill = "${this.color}"/>`;
  }
}

// Triangle shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square shape
class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = {Circle, Triangle, Square};