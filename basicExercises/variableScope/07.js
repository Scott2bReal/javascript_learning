/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

/**
 * I think this will be a reference error, since a hasn't been declared in the
 * myFunction block yet.
 *
 * I was wrong! Because a is declared in the let statement at the top level of
 * the code, it is available even within the body of myFunction
 */
