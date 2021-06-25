/** 
 * Write code that capitalizes the words in the string 'launch school tech &
 * talk', so that you get the string 'Launch School Tech & Talk'.
 */

let string = 'launch school tech & talk';

function capitalize(string) {

  wordArr = string.split(' ');
  newWordArr = [];
  
  for (let word of wordArr) {
    wordToCap = word.split('');
    wordToCap[0] = wordToCap[0].toUpperCase();
    newWordArr.push(wordToCap.join(''));
  }
  
  return newWordArr.join(' ');
}

console.log(capitalize(string));

// Provided solution:

/*let*/ string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'
