/////////////////////////////////////////////////
////////// Shape - Define a Shape class.////////
///////It should have the number of sides and //
////////// a color associated with it. /////////
//Make the other classes Inherit from it.////////
/////////////////////////////////////////////////
length() {
    var a = this.x2 - this.x1;
    var b = this.y2 - this.y1;
    return Math.sqrt(a * a + b * b);
  }

