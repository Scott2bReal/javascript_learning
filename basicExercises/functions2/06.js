/** 
 * Create a function removeLastChar that takes a string as an argument, and
 * returns the string without the last character.
 */

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(string) {
    console.log(string.slice(0, -1));
    return string.slice(0, -1);
}
