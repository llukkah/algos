///////////////////////////////////////////////////////////////
////////////////////// GEOMETRY ///////////////////////////////
///////////// OF RECTANGLE AND TRIANGLE////////////////////
///////////////////////////////////////////////////////////////
class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  // isSquare - returns true if the rectangle is a square.
    isSquare() {
      return this.length === this.width;
    }
  // area - calculates the area of the rectangle.
  // Hint: Area = length * width
    area() {
      return this.length * this.width;
    }
  // perimeter - calculates the perimeter of the rectangle.
  // Hint: Calculate the perimeter by adding all of the sides together.
    perimeter() {
      return 2 * (this.length + this.width);
    }
  }