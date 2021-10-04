import { NotImplementedError } from '../extensions/index.js';

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
function createDict( string ) {
  let dict = {}
  for (let letter of string) {
    if (!dict[ letter ]) {
      dict[ letter ] = 0
    }
    dict[ letter ] += 1
  }
  return dict;
}
export default function getCommonCharacterCount(s1, s2) {
  let dictS1 = createDict(s1)
  let dictS2 = createDict(s2)
  let count = 0
  for (let key in dictS1) {
    if (dictS2 [ key ]) {
      count += Math.min (dictS1 [ key ], dictS2 [key])
    }
  }
  return count;
}
