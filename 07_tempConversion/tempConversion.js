const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 1.8) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
