const reverseString = function(str) {
    const strArray = str.split("");
    const revStrArray = strArray.reverse();
    const reversedStr = revStrArray.join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
