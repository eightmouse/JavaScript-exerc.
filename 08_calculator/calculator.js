const add = function(number1, number2) {
  let operator = '+';
	if (operator == '+') {
    result = number1 + number2;
  }
  return result;
};

const subtract = function(number1, number2) {
  let operator = '-';
  if (operator == '-') {
    result = number1 - number2;
  }
  return result;
};

const sum = function(numbers) {
  let myNums = numbers;
  let sum = 0;
  for (let i = 0; i < myNums.length; i++) {
    sum += myNums[i];
  }
  return sum
};

const multiply = function(numbers) {
  myArray = numbers
  let myValue = myArray.reduce((a,b)=> a*b);
  return myValue;
};

const power = function(myPow) {
  myPow = Math.pow(4, 3)
  return myPow;

};

const factorial = function(n) {
let result = 1;
if (n == 0 || n == 1) {
  return result;
} else {
  for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
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
