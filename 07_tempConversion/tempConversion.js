const convertToCelsius = function(celsius) {  
  const temp = (celsius - 32) * (5 / 9);
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(fahr) {
  const temp = fahr * (9 / 5) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
