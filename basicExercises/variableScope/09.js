/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/**
 * This will throw an error because myFunction isn't expecting an argument.
 *
 * I was wrong! Passing an unexpected argument is just ignored by the function,
 * and does not produce an error. The opposite case does, however.
 *
 * In this case the error was thrown because of the attempted reassignment of a,
 * which was declared with a const statement.
 */
