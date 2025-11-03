class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(7, 4);

console.log("Area:", rect.area());         
console.log("Perimeter:", rect.perimeter()); 
