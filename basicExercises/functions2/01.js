/**
 * How can we alter the function definition of greet so that the parameter
 * greeting is assigned a default value of 'Hello' when no argument is passed to
 * the function invocation?
 */

function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
/**
 * The function definition should be changed to:
 * 
 * function greet(greeting = 'Hello')
 * 
 * The function will either accept and use the value of greeting, or supply 'Hello' if nothing is passed to it.
 */