import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let arrTransform = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
          i++;
      } else if (arr[i] === '--discard-prev') {
          if (i != 0) {
              arrTransform.splice(i - 1, 1);
          }
      } else if (arr[i] === '--double-next') {
          if (i != arr.length - 1) {
              arrTransform.push(arr[i + 1]);
          }

      } else if (arr[i] === '--double-prev') {
          if (i !== 0 && arr[i - 2] !== '--discard-next') {
              arrTransform.push(arr[i - 1])
          }

      } else {
          arrTransform.push(arr[i]);
      }


  }
  return arrTransform;
}