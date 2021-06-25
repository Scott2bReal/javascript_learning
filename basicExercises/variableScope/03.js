/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

if (true) {
  let myValue = 20;
}

console.log(myValue);

/**
 * This will log 20 because true will validate the condition, allowing the
 * variable to be declared. Does let contain the variable within the if block
 * though? VSCode would show that...
 *
 * It does throw a ReferenceError. Looks like the if block does limit the scope
 * of the let declaration!
 */
