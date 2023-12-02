// const {getRandomNumber, averageOfTwo, sumOfTwo} = require('./mathUtils');   // Comparable to import statement
// ^^^ to call this in a file in a different folder, put './..js-modules/mathUtils' ///// Need to update this later, currently it is incorrect

const math = require('/.mathUtils');    // use this if storing all things exported in an object
/*
Generate 2 random numbers between 1 and 10, both inclusive.
Find their average
*/
const r1 = math.getRandomNumber(1, 10);
const r2 = math.getRandomNumber(1, 10);

console.log(r1, r2);
console.log(math.sumOfTwo(r1, r2));
console.log(math.averageOfTwo(r1, r2));