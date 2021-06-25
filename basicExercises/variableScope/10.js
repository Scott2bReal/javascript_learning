/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/**
 * This one will log { firstName: 'Jane', lastName: 'Doe' } even though a was
 * declared with const. The object is being modified, but a is not being
 * reassigned to a different object.
 *
 * nailed it.
 */
