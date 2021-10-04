import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {

  let arr1 = [...arr];
  let arr2 = [];
  let arrrsl = [];
  arr1 = arr1.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== -1) {
      arr2.push(arr1[ i ]);
    }
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[ i ] === -1) {
      arrrsl.push(arr[ i ]);
    }
    else {
      arrrsl.push(arr2[ count ]);
      count += 1;
    }
  }

  return arrrsl
}