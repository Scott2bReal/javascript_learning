function evenOrOdd(n) {
  if (Number.isInteger(n) === false) {
    console.log('error');
    return;
  } else if (n % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  } 
}

let a = '2';
evenOrOdd(a);