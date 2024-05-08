class Shape {
    constructor(shapeColor) {
        this._shapeColor = shapeColor;
    }

    setColor(shapeColor) {
        this._shapeColor = shapeColor;
    }

    get shapeColor() {
        return this._shapeColor;
    }
}

