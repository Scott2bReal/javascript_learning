let array = [3, 5, 7];

function squareSum(arr) {
    let squaredArr = arr.map(n => n * n);
    return squaredArr.reduce((accumulator, element) => accumulator + element);
}

console.log(squareSum(array));
