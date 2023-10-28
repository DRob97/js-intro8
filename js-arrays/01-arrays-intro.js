const cities = ['Chicago', 'Miami', 'Toronto'];

console.log(cities);                // [ 'Chicago', 'Miami', 'Toronto' ]
console.log(typeof cities);         // object
console.log(cities.length);         // 3
console.log(cities[0]);             // Chicago
console.log(cities[-1]);            // undefined
console.log(cities[5]);             // undefined

cities[1] = 'Berlin';               // updates the index 1 with the value 'Berlin'
console.log(cities[1]);             // Berlin

// Creating an array from a string using split() method
let name = 'John Doe';

// split into an array by letter
const characters = name.split('');
console.log(characters);            // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']

let sentence = 'I like JS arrays';
const words = sentence.split(' ');
console.log(words);

// Count how many words do you have in a sentence
let sent = 'The conflicts with GIT was hard but I am happy to be back to JS';
console.log(sent.split(' ').length);