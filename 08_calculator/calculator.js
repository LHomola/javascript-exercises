const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sumArr = 0;
  arr.forEach(addArrayItem);

  function addArrayItem(item) {
    sumArr += item;
  }

  return sumArr;
};

const multiply = function(arr) {
  let multArr = 1;

  arr.forEach(multiplyItem);

  function multiplyItem(item) {
    multArr *= item;
  }

  return multArr;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let fact = 1;

  for (let i = num; i > 0; i--) {
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
