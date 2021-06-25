/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/**
 * Ok, THIS one will log '1' to the console for sure. The declaration and
 * intialazation of a is contained within the myFunction block, but myFunction()
 * is invoked properly and will log the value of a.
 */
