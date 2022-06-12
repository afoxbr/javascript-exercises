const sumAll = function(a, b) { 
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    if (a < b) {
      let i = a;
      do {
        a++;
        i = i + a;
      } while (a < b);
      return i;
    };
    if (b < a) {
      let i = b;
      do {
        b++;
        i = i + b;
      } while (a > b);
      return i;
    };
  }
  else {
    return "ERROR";
  }
}

// Do not edit below this line
module.exports = sumAll;
