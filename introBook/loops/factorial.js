let rlSync = require('readline-sync');

let number = rlSync.question('Enter a number: ');

function factorial(n) {
  if (n > 1) {
    return n * factorial(n-1);
  } else {
    return 1;
  }
}

console.log(factorial(number));