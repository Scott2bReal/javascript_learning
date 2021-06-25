/**
 * Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.
 */

let animal = 'horse';

switch (animal) {
      case 'duck':
            console.log('quack');
          case 'squirrel':
            console.log('nook nook');
          case 'horse':
            console.log('neigh');
          case 'bird':
            console.log('tweet tweet');
          default:
            console.log('*cricket*');
}

/**
 * It will log 
 *
 * 'neigh'
 * 'tweet tweet'
 * '*cricket*'
 *
 * Because animal is initialzed to 'horse', it will skip the first two case statements. Once it evaluates as true though, there is no break statement. 
 * The rest of the cases will execute via fall through
 */
