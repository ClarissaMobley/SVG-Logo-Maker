class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return "";
  }

}

class Circle extends Shape {
  constructor(shapeColor, cx = 150, cy = 150, radius = 80) {
    super(shapeColor);
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
  }

  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this._shapeColor}" />`;
  }

}
