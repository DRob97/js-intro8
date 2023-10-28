// Extracing partial strings

let sentence = "I like JavaScript";
// One character -> []
// Partial string (one or more characters) -> slice(), or substring()

// slice()
console.log(sentence.slice(7));     // "JavaScript" // No need to give a second index if there is no need to cut before the end of the string
console.log(sentence.slice(2, 6));  // "Like"       // First index included, second NOT, so must do last desired index +1
console.log(sentence.slice(11));    // "Script"
console.log(sentence.slice(7,11));  // "Java"

// substring()
console.log(sentence.substring(7));     // "JavaScript"
console.log(sentence.substring(2, 6));  // "Like"
console.log(sentence.substring(11));    // "Script"
console.log(sentence.substring(7,11));  // "Java"

// slice() vs. substring()
let name = "Alexander";
console.log(name.substring(-5));        // Substring always starts at the beginning of the string, considering negative numbers to come before 0
console.log(name.slice(-5));            // Slice interprets negative indexes as starting from the back of the string
console.log(name.slice(-100));          // Reads from right to left until it cannot anymore and then reads from left to right

console.log(name.substring(-5, -2));    // ""
console.log(name.slice(-5, -2));        // "and"
console.log(name.substring(-2, -5));    // ""       // if your second index comes before the first when going left to right,
                                                    //you will always get an empty string
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let city = "Chicago";
/*
    Task: Retreive and combine first 2 and last 2 characers of the city variable -> "Chgo"
*/
console.log(city.substring(0, 2) + city.slice(-2)); // Prefferred to use slice over substring here

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Split
let str = 'Apple Banana Pineapple Grapes';
const fruits = str.split(' ');                      // [ 'Apple', 'Banana', 'Pineapple', 'Grapes' ]
console.log(fruits.length);

let text = 'I will do more practices today';
// How many words do you have in this text?
console.log(text.split(' '));                       // NOTE here and above we are using a space (' ') as to indicate where we split the string
console.log(text.split(' ').length);                // NOTE the spaces, i.e. the part of the string where you split, will not be included in the array
console.log(text.split('do'));                      // [ 'I will ', ' more practices today']

console.log('Hello'.split(''));
console.log('Hello World'.split());