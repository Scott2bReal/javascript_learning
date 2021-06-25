/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/**
 * I think this one will log false, because the b in the f block is a different
 * variable than the one declared outside of it. The original b from the main
 * block will retain its value of true.
 *
 * I was right!
 */
