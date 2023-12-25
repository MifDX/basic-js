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
  const arrFromN = Array.from(String(n), Number);
  console.log(arrFromN);
  
  const arrForCheck = arrFromN.map((curEl, index) => {
  return Number(arrFromN.filter((CurEl, indexCurArr) => indexCurArr !== index).join(''));
});
return Math.max(...arrForCheck);
}


module.exports = {
  deleteDigit
};
