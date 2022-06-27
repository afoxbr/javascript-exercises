const add = function(a, b) {
	c = a + b;
  return c;
};

const subtract = function(a, b) {
	ans = a - b;
  return ans;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product = (product * array[i]);
  }
  return product;
};

const power = function(a, b) {
	return (a**b);
};

const factorial = function(num) {
	let facto = num;
  if (num === 0 || num === 1){
    return 1;
  }
  while (num > 1) {
    num--;
    facto = facto * num;
  }
  return facto;
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
