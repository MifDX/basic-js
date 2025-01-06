const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const ArrS1 = s1.split('');
    const ArrS2 = s2.split('');
    let result = 0;
    while (ArrS1.length) {
      let temp = ArrS1.pop();
      if (ArrS2.includes(temp)) {
        result += 1;
        let indexS2 = ArrS2.indexOf(temp);
        ArrS2[indexS2] = null;
      }
    }
    return result;
  }
  

module.exports = {
  getCommonCharacterCount
};
