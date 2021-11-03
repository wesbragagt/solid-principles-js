// Liskov substitution principle says that if S is a subtype of T then objects of type T may be replaced with objects of type S without altering any of the desirable functionality.

// Subtypes should retain the behavior of the parent type

// Bad example
function badExample() {
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

  const rectangle1 = new Rectangle();
  const square1 = new Square();

  useRectangleArea(rectangle1);
  useRectangleArea(square1);
}

// Good example
function goodExample() {
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
  const rectangle1 = new Rectangle();
  const square1 = new Square();

  function useShapeArea(shape) {
    shape.setWidth(2);
    shape.setHeight(4);
    console.log("Shape area: ", shape.getArea());
  }
  useShapeArea(rectangle1);
  useShapeArea(square1);
}

// badExample()
// goodExample()
