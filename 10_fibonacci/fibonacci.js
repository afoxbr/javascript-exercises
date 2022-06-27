const fibonacci = function(num) {
  if (num < 0) {
    return "OOPS";
  } else {
    let fib = [0,1];
    for (let i = fib.length; i < 30; i++) {
      fib[i] = fib[i-2] + fib[i-1];
    };
    return fib[num];
    };
};

// Do not edit below this line
module.exports = fibonacci;
