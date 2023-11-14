const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive number   // 10
// Find first negative number   // -4
// Find first even number       // 0
// Find first odd number        // 5
console.log('\n Using find():');
console.log(numbers.find(number => number > 0));            // 10
console.log(numbers.find(number => number < 0));            // -4
console.log(numbers.find(number => number % 2 === 0));      // 0
console.log(numbers.find(number => number % 2 !== 0));      // 5

console.log('\n Using findInex():');
console.log(numbers.findIndex(number => number > 0));               // 1
console.log(numbers.findIndex(number => number < 0));               // 2
console.log(numbers.findIndex(number => number % 2 === 0));         // 0
console.log(numbers.findIndex(number => number % 2 !== 0));         // 3

console.log('\n When the values don\'t exist:');
console.log(numbers.find(number => number === 500));        // undefined
console.log(numbers.findIndex(number => number === 500));        // -1