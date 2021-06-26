/** 
 * Before running any code, determine what difference there will be in the
 * output of the two code snippets below (if any).
 */
 
// Snippet 1:
/**let ocean = {}; 
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?
*/

// Snippet 2:
let ocean = {}; 
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?


/** 
 * I think snippet 1 will log 'Pacific' for the prefix prop of ocean  and snippet 2 will log 'Indian'. This
 * is because dot notation doesn't need formatting and will automatically make
 * a property name. Bracket notation, however, is sensitive to formatting and
 * will use prefix as a value instead of treating it as a string.
 */

/**
 * I was wrong. My mistake is obvious to me now. In the second snippet, [prefix] will translate to 'Indian'. therefore ocean will evaluate to {Indian: 'Pacific'}
 */
