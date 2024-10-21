const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	if(arr.length == 0) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  if(arr.length == 0) return 0;
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if(num == 1 || num == 0) return 1;
  
  let fact = num;

  for(let i = num - 1; i > 1; i--) {
    console.log(fact);
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
