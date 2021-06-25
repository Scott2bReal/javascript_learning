// Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

/**
 * '$3.99 will be logged. sale is initialzed as true, but the ternary condition has the bang (!) operator 
 * in front of sale, which changes its return value to false. Therefore the false condition of the ternary will be executed.
 */
