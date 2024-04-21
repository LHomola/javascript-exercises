const palindromes = function (input) {
    const inputNoBreaks = input.toLowerCase().replace(/[^0-9a-z]+/gi,"");
    const revInputNoBreaks = inputNoBreaks.split("").reverse().join("");
    return inputNoBreaks === revInputNoBreaks;
};

// Do not edit below this line
module.exports = palindromes;
