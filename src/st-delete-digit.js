import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit( n ) {
  let arr = n
    .toString()
    .split("")
    .map(( e ) => +e);

  let m = arr.reduce((a, b) => {
    if (b < a) return (a = b);
    return a;
  }, arr[ 0 ]);
  let index = arr.indexOf( m );
  return + [...arr.slice(0, index), ...arr.slice(index + 1)].join("");
}
