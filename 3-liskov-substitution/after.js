// After
// Liskov Substitution Principle
class Shape {
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  setWidth(value) {
    this.width = value;
  }
  setHeight(value) {
    this.height = value;
  }
}

class Square extends Shape {
  setWidth(value) {
    this.width = value;
    this.height = value;
  }
  setHeight(value) {
    this.width = value;
    this.height = value;
  }
}

function useShapeArea(shape) {
  shape.setWidth(2);
  shape.setHeight(4);
  console.log("Shape area: ", shape.getArea());
}
useShapeArea(new Rectangle());
useShapeArea(new Square());
