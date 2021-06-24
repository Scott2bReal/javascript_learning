let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
    let new_arr = arr.map(x => x = x.length);
    return new_arr.filter(y => y % 2 === 1);
};

console.log(oddLengths(arr));
