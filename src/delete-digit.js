const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let deleteNumber = arr.splice(i, 1);
    let newNumber = arr.join('');
    let total = +newNumber;
    newArr.push(total);
    arr.splice(i, 0, deleteNumber);
  }

  let result = newArr.sort((j, x) => j - x);
  return result[result.length - 1];
}

module.exports = {
  deleteDigit,
};
