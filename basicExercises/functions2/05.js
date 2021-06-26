/**
 * Implement a function catAge that takes a number of human years as input and
 * converts them into cat years. Cat years are calculated as follows:
 *
 * The first human year corresponds to 15 cat years.  
 * The second human year corresponds to 9 cat years.  
 * Every subsequent human year corresponds to 4 cat years.
 *
 * For example:
 */

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

function catAge(humanYears) {
  let finalAge = 0;
  while (humanYears > 0) {
    humanYears -= 1;
    if (humanYears === 0) {
      finalAge += 15;
    } else if (humanYears === 1) {
      finalAge += 9;
    } else {
      finalAge += 4;
    }
  }
  console.log(finalAge);
  return finalAge;
}

// This works, but here is the solution from the book:

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

