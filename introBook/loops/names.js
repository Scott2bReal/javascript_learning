let names = ['chris', 'kevin', 'naveed', 'pete', 'victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
    index += 1;
}

console.log(upperNames);
