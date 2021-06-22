function caps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
} 

console.log(caps('hello world'));