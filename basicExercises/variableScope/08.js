/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/**
 * This will log 2 to the console because although a variable a is declared with
 * a let statement on the first line, the name a for the myFunction parameter is
 * only a coincidence. It will not take on the value of the previously declared
 * a. When myFunction is passed b as an argument, it will log that value, 2.
 *
 * nailed it
 */
