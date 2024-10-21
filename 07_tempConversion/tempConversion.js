const convertToCelsius = function(num) {
  return +(5 / 9 * (num - 32)).toFixed(1);
};

const convertToFahrenheit = function(num) {
  
  return +(((9 / 5) * num) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
