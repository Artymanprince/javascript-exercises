const sumAll = function(min,max) {
    // Check if both arguments are integers
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR"; // Return error if either argument is not an integer
  }

  // Check if either argument is a negative number
  if (min < 0 || max < 0) {
    return "ERROR"; // Return error if either argument is negative
  }

  // Swap the values if min is greater than max
  if (min > max) {
    [min, max] = [max, min]; // Swap using array destructuring
  }

  let sum = 0; // Initialize sum to 0

  // Loop from min to max (inclusive) and add each number to sum
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum; // Return the calculated sum
};

// Do not edit below this line
module.exports = sumAll;
