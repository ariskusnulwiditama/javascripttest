function calculator(a, b, callback) {
    return callback(a, b);
  }
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  
  console.log(calculator(10, 5, add)); 
  console.log(calculator(10, 5, subtract)); 
  