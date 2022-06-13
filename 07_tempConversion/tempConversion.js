const ftoc = function(f) {
  let c = (f - 32) * (5 / 9);
  cRound = Math.round(c * 10) / 10;
  return cRound;
};

const ctof = function(c) {
  let f = (c * (9 / 5)) + 32;
  fRound = Math.round(f * 10) /10;
  return fRound;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
