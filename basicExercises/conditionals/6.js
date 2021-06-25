/**
 * Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
 */

let weather = 'sunny'
// let weather = 'rainy'
// let weather = 'blizzard'

switch(weather) {
    case 'sunny':
        console.log('Let\'s go outside!');
        break;
    case 'rainy':
        console.log('Let\'s grab an umbrella!');
        break;
    default:
        console.log('Let\'s stay inside!');
}
