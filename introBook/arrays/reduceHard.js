let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddReducer(array) {
    return array.reduce((accumulator, element) => {
        if (element.length % 2 === 1) {
            accumulator.push(element.length);
        }
        return accumulator;
    }, [])
}

console.log(oddReducer(arr));
