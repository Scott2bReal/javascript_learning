/**
 * Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.
 */

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

/**
 * 19 < 24 && ( 0 > 0 (false) || 24 > 0 (true))
 *
 * isMoving will be true because both sides evaluate to true!
 */

console.log(isMoving);

// Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

/**
 * The parentheses are necessary because the order of precedence is Conditional, Equality, Logical &, Logical ||
 * This means the && statement would short-circuit before the || statement was evaluated as true
 */
