/**
 * This code contains an error. Check the documentation of both TypeError and
 * length, in order to find out what causes the error.
 */

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

/** 
 * Solution: length is a property of the String object, and not a function.
 * Length is called without parentheses. tweet.length is expected to return a
 * number, so when it is invoked as a function there is a type mismatch.
 */

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
