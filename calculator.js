class Calculator {
 add(a, b) {
         return a + b;
}
subtract(a, b) {
    return a - b;
}

multiply(a, b)  {
    return a * b;
}

divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
}
    

 
const calc = new Calculator();
console.log(calc.add(4, 3));       
console.log(calc.subtract(10, 5)); 
console.log(calc.multiply(6, 6));  
console.log(calc.divide(16, 2));   
console.log(calc.divide(17, 0)); 