// Changing cases

let greeting = "Good morning!";

let upperGreeting = greeting.toLowerCase();                 // good morning!
let lowerGreeting = greeting.toUpperCase();                 // GOOD MORNING!

console.log(upperGreeting);                                 // good morning!
console.log(lowerGreeting);                                 // GOOD MORNING!

 let quote = "The total price is $125.99";
 console.log(quote.toLowerCase());                          // notice that the special characters are unaffected by the change of case
 console.log(quote.toUpperCase());                          // The following two logs make note that the original thing is not changed

 console.log(greeting);
 console.log(quote);

 // The following is very advanced, and I coded it incorrectly so ignore it
 /*
let  result = quote.split('').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase).join('');
console.log(result);
*/