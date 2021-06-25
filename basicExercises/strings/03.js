/** 
 * Implement a function repeat that repeats an input string a given number of
 * times, as shown in the example below; without using the pre-defined string
 * method String.prototype.repeat().
 */

repeat(3, 'ha'); // 'hahaha'

function repeat(num, string) {
  let finalString = string;
  for (let i = 0; i < num - 1; i += 1) {
    finalString += string;
  }

  console.log(finalString)
}
