/**
 * What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.
 */

//

let counter = 0;

while (counter > 0) {
      console.log('Woooot!');
      counter -= 1;
}

//

let counter = 0;

do {
      console.log('Woooot!');
      counter -= 1;
} while (counter > 0);

//

/**
 * The second example will run once, while the first will not run at all. Counter is initialized at 0, and therefore will never be above zero due to the negative iteration
 * within the loop body. A do/while loop will execute the loop body once before checking the condition, versus a while loop which will check the condition before running.
 */

