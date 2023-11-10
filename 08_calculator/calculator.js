const add = function(numA, numB) {
	let res = numA + numB;
  return res;
};

const subtract = function(numA, numB) {
	let res = numA - numB;
  return res;
};

const sum = function(numN) {
	let res = numN.reduce((numA, numB) => numA + numB, 0);
  return res;
};

const multiply = function(numN) {
  let res = numN.reduce((numA, numB) => numA * numB)
  return res;
};

const power = function(numA, numB) {
    let res = Math.pow(numA,numB);
    return res;
};

const factorial = function(numA) {
  if (numA === 0) return 1;
  let res = 1;
  for (let i = numA; i > 0; i--) {
    res *= i;
  }
	return res;
  
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
