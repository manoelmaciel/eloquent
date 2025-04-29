/* sex 02 ago 2024 19:34:21  */

let power = (base, exponent) => {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(10, 3));

console.log(power(0, 0));
  
