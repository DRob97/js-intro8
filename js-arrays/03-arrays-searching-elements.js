const fruits = ['Kiwi', 'Apple', 'Orange', 'Papaya', 'Cherry', 'Apple'];

// includes() method
console.log(fruits.includes('Apple'));  // true
console.log(fruits.includes('apple'));  // false

// check if the array has both 'Kiwi' and 'Watermelon'  -> false
console.log(fruits.includes('Kiwi') && fruits.includes('Watermelon')); // false

// check if the array has 'Grapes' or 'Strawberry' -> false
console.log(fruits.includes('Grapes') || fruits.includes('Strawberry')); // false

//indexOf() & lastIndexOf   methods
console.log(fruits.indexOf('Apple'));       // 1
console.log(fruits.lastIndexOf('Apple'));   // 5
console.log(fruits.indexOf('Orange'));       // 2
console.log(fruits.lastIndexOf('Orange'));   // 2

console.log(fruits.indexOf('Grapes'));              // -1
console.log(fruits.lastIndexOf('Strawberry'));      // -1

// What are the indecies of 'Kiwi' and 'Orange'     NOTE: do not use boolean operators in this instance
console.log(fruits.indexOf('Kiwi'), fruits.indexOf('Orange'));

const numbers = [10, 20, 30];

// Check if the array numbers contains element 20
// if true, print 20 is here
// if false, print 20 is not here
if(numbers.includes(20)) console.log('20 is here');
else console.log('20 is not here');