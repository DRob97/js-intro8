const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5    // true
console.log(numbers.some(number => number % 5 === 0))   // true

// check if some elements are even  // true
//check if some elements are odd    // true
console.log(numbers.some(number => number % 2 === 0));  // true (even)
console.log(numbers.some(number => number % 2 !== 0));  // true (odd)

// check if every element is positive   // false
// check if every element is negative   // false
console.log(numbers.every(number => number > 0))    // false (positive)
console.log(numbers.every(number => number < 0))    // false (negative)

const cities = ['Rome', 'Kyiv', 'Paris', 'Milan'];
// Check if every city has 4 or 5 letters   // true
console.log(cities.every(city => city.length === 4 || city.length === 5));