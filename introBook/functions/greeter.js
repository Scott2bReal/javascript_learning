// greeter.js

let rlSync = require("readline-sync");

function firstName() {
  let firstName = rlSync.question("What's your first name?\n");
  return firstName;
}

function lastName() {
  let lastName = rlSync.question("What's your last name?\n");
  return lastName;
}

firstName = firstName();
lastName = lastName();

console.log(`Hello, ${firstName} ${lastName}`);
