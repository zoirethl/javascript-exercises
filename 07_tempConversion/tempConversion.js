const convertToCelsius = function(fahrenheit) {  //(32 °F − 32) × 5/9 = 0 °C
    const celsius = (fahrenheit - 32) * (5/9);
    var celsiusRounded = Math.round (celsius * 10) / 10; //rounds a number to the nearest integer
    return celsiusRounded;
};

const convertToFahrenheit = function(celsius) { // (0 °C × 9/5) + 32 = 32 °F
  const fahrenheit = (celsius * (9/5) + 32);
  var fahrenheitRounded = Math.round (fahrenheit * 10) / 10; //rounds a number to the nearest integer
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
