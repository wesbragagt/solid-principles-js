// Before
// Liskov Substitution Principle
class Rectangle {
  setWidth(value) {
    this.width = value;
  }
  setHeight(value) {
    this.height = value;
  }
  getArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  setWidth(value) {
    this.width = value;
    this.height = value;
  }
  setHeight(value) {
    this.width = value;
    this.height = value;
  }
}

function useRectangleArea(rectangle) {
  rectangle.setWidth(2);
  rectangle.setHeight(4);
  console.log("Rectangle area: ", rectangle.getArea());
}

// Square is a rectangle but a rectangle is not a square
// wrong abstraction
useRectangleArea(new Rectangle());
useRectangleArea(new Square());
