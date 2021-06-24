function allMatches(arr, regex) {
  return arr.filter(word => regex.test(word));
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/g));
