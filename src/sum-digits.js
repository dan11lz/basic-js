const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString();
  let sum = 0;
  let value;

  if (str.length > 1) {
    value = true;
  }

  while (value) {
    for (let i of str) {
      sum += +i;
    }
    if (str.length === 1) {
      value = false;
    } else {
      str = sum.toString();
      sum = 0;
    }
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};
