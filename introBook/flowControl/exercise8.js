function numberRange(n) {
  if (n >= 0 && n <= 50) {
      console.log(`${n} is between 0 and 50`);
  } else if (n > 50 && n <= 100) {
      console.log(`${n} is between 51 and 100`)
  } else if (n > 100) {
      console.log(`${n} is greater than 100`);
  } else {
      console.log(`${n} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);