function removeFromArray(inputArray, ...args) {
  return inputArray.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
