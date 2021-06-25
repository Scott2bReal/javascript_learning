/** 
 * Given strings like the following, how can you check whether they're equal
 * irrespective of whether the characters they contain are upper or lower case?
 */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(isEqual(string1, string2));
console.log(isEqual(string1, string3));
console.log(isEqual(string2, string3));
