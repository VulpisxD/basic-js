import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const arr = [ ];
  names.forEach( file => {
    if(!arr.includes( file )) {
      arr.push( file );
    } else {
      if(!arr.includes(file + '(1)')) {
        arr.push(file + '(1)');
      } else {
        const count = arr.filter(el => el === file).length;
        arr.push(`${file}(${count + 1})`)
      }
    }
  });
  console.log(arr)
  return arr
}
