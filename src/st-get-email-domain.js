import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let res = []
  let arr = email.split('').reverse()
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == '@') {
      return res = arr.splice(0, i).reverse().join('')
    }
  }
}