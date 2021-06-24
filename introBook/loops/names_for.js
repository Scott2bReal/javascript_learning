let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let i = 0; i < names.length; i++) {
    let upperClassName = names[i].toUpperCase();
    upperNames.push(upperClassName);
}

console.log(upperNames);
