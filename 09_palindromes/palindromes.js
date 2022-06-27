const palindromes = function (str) {
    let strLow = str.toLowerCase();
    let regex = strLow.replace(/[^a-z]+/g, '');
    let reversed = regex.split("").reverse().join("")
    return regex === reversed
};

// Do not edit below this line
module.exports = palindromes;
