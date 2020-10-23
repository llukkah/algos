/////////////////////////////////////////////////
////////////TRIANGLE/////////////////////////////
/////////////////////////////////////////////////
class Triangle {
    constructor(sideA, sideB, sideC){
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  /////////////////////////////////////////////////
  // isEquilateral - returns true if the triangle is equilateral.
  /////////////////////////////////////////////////
    isEquilateral() {
      return this.sideA === this.sideB && this.sideB === this.sideC;
    }
  /////////////////////////////////////////////////
  //isIsosceles return true if the triangle is isosceles.
  ////////////////////////////////////////////////
    isIsosceles() {
      return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
    }
  /////////////////////////////////////////////////
  //area - calculates the area of the Triangle.
  /////////////////////////////////////////////////
  //A triangle has three sides represented by a, b and c, 
  ///semi-perimeter represented by s. s = (a + b + c)/2
  ////Area is equal to the square root of s * (s - a) * (s - b) * (s - c).
    area() {
      var p = (this.sideA + this.sideB + this.sideC) / 2;
      var area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
      return area;
    }
   //////////////////////////////////////////////////
  //isObtuse returns true if the triangle is obtuse.
  /////////////////////////////////////////////////
  // Hint: Obtuse triangles have one side that is longer in length than both of the other two sides.
    isObtuse() {
      var sides = [this.sideA,this.sideB,this.sideC];
      sides.sort();
      return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2);
    }
  }
  ///////////////////////////////////////////////////////////////
  //length calculates the length of the (x1, y1) --> (x2, y2) line segment.
  // Hint: Calculate the line segment by taking
  ///the square root of ((x2 - x1) ** 2) - ((y2 - y1) ** 2).
  /////////////////////////////////////////////////
  class LineSegment {
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
}