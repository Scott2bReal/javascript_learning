/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/**
 * I think this one will throw an error because a is declared in two spots. In
 * order to make the code work the 'let' must be omitted in order to reassign a
 * rather than declare it again.
 *
 * I was wrong! It actually gives a reference error. The blocks are more
 * exclusive than I gave them credit for! The reference to a within the if block
 * doesn't work because it hasn't been declared inside that block yet.
 */
