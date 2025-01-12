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
  const arrFromN = Array.from(String(n), Number);

  const arrSum = arrFromN.reduce((acc, cur) => acc + cur, 0);

  let answer = arrSum < 10 ? arrSum : getSumOfDigits(arrSum);
  return answer;
  
}

module.exports = {
  getSumOfDigits
};
