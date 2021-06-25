/**
 * Write code that checks whether the string byteSequence contains the character x.
 */

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// Here's me trying to implement String.prototype.includes() myself

function myOwnIncludes(string, searchString) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === searchString) {
      return true;
    }
  }
}

console.log(myOwnIncludes(byteSequence, 'x'));
