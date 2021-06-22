let rlSync = require("readline-sync");

let multiply = (a , b) => {
  a = Number(rlSync.question("Enter the first number: "));
  b = Number(rlSync.question("Enter the second number: "));
  let sum = a * b;
  return console.log(`${a} * ${b} = ${sum}`)
}

multiply();