/**
 * Write a function that checks whether a string is empty or not. For example:
 */

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
}

// The provided solution is much more elegant!

function isBlankAgain(string) {
  return string.length === 0;
}
