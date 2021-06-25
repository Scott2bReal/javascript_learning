/**
 * The destinations array contains a list of travel destinations.
 *
 * Write a function that checks whether or not a particular destination is
 * included within destinations, without using the built-in method
 * Array.prototype.includes().
 *
 * For example: When checking whether 'Barcelona' is contained in destinations,
 * the expected output is true, whereas the expected output for 'Nashville' is
 * false.
 */

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, listOfCities) {
  for (let toFind of listOfCities) {
    if (city === toFind) {
      return true;
    } 
  }
  return false;
}

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));


/**
 * Further Exploration (from the book)
 *
 *
 * Under the hood, indexOf is conceptually similar to our first solution. In
 * particular it also uses strict equality === to compare the input element to
 * all elements in the array.
 *
 * A consequence of using strict equality is that both solutions work only for
 * primitive types like strings. For objects, the equality check would test
 * whether the input object and the elements in the list are the same object in
 * terms of reference, which might not be the case. For example:
 */

let lists = [[1, 2], [3], [4, 5, 6]];

contains([3], lists); // false