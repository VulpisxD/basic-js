import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};
  const arr = domains.map((domain) => domain.split("."));
  arr.forEach((el) => {
    let property = `.${el[el.length - 1]}`;
    for (let i = 1; i < el.length + 1; i++) {
      if (obj.hasOwnProperty(property)) {
        obj[property] += 1;
      } else {
        obj[property] = 1;
      }
      property += `.${el[el.length - 1 - i]}`;
    }
  });
  return obj;
}
