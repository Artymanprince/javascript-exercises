const convertToCelsius = function(fahrenheit) {
    // Convert Fahrenheit to Celsius using the formula and round to one decimal place
    const celsius = (fahrenheit - 32) * (5 / 9);
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
    // Convert Celsius to Fahrenheit using the formula and round to one decimal place
    const fahrenheit = (celsius * 9) / 5 + 32;
    return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
