const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers
console.log(numbers.filter(number => number > 0));

// Find all the even numbers
// Find all the odd numbers
// Even
console.log(numbers.filter(number => number % 2 === 0));
// Odd
console.log(numbers.filter(number => number % 2 !== 0));

// Replace all the negative numbers with 0
console.log(numbers.map(number => number < 0 ? 0 : number));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.toUpperCase().startsWith('M')));                           // [ 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')));                         // [ 'Apple', 'Pineapple' ]
console.log(fruits.filter(fruit => fruit.length === 5));                                            // [ 'Apple', 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.length !== 5));                                            // [ 'Orange', 'Kiwi', 'Pineapple' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('a') || fruit.toLowerCase().includes('e')));    
// (for above line) [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]

console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('i') >= 0).length);
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith('e')).length);

console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length - 1]));