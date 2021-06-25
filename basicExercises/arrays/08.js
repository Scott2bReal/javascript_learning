/**
 * How can you check whether a variable holds a value that is an array? For
 * example, imagine you start writing a function and want to check whether its
 * argument is an array:
 */

const array = [];
const notArray = 'not an array';

 function filter(input) {
  // Is input an array?
  return Array.isArray(input); 
}

console.log(filter(array));
console.log(filter(notArray));