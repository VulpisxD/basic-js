import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  if ( matrix ) {
    let counter = 0
    matrix[0].forEach(( item, index ) => {
      if (item !== 0) {
        counter += item
        for (let i = 1; i < matrix.length; i++) {
          if (matrix[i][index] !== 0) {
            counter += matrix[i][index]
          } else {
            return
          }
        }
      } else {
        return
      }
    })
    return counter
  }
}
