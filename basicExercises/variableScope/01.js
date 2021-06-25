/** 
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

console.log(greeting);

var greeting = 'Hello world!';

/** 
 * Before running it, I would think that it would throw a Reference error
 * because greeting is not initialized before it is called. I am not familiar
 * with the var keyword however, so it may give it a global scope (like calling
 * a declared function)
 */

/**
 * It returns undefined! Var 'hoists' a variable to the top of a program, making
 * it behave as follows:
 */

var greeting;

console.log(greeting);

greeting = 'Hello world!'

/**
 * When a var variable is declared but not assigned a value, it is initialized
 * as undefined.
 */
