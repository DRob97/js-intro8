const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arr4 = arr1.concat(arr2);
const arr5 = arr2.concat(arr1);
const arr6 = arr1.concat(arr2).concat(arr3);
const arr7 = arr1.concat(arr2.concat(arr3));

console.log(arr4);                  // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr5);                  // [ 4, 5, 6, 1, 2, 3 ]
console.log(arr6);                  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr7);                  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// NOTE: using + operand converts arrays to strings and tries to concatenate them as strings

// Spread (...) operator
const words = ['Hello', 'Hi', 'World'];
const words2 = ['Good', 'Morning'];
console.log(words);                     // [ 'Hello', 'Hi', 'World' ]
console.log(words2);                    // [ 'Good', 'Morning' ]

console.log(words.concat(words2));      // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]
console.log([...words, ...words2]);     // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]
console.log([...words2, ...words]);     // [ 'Good', 'Morning', 'Hello', 'Hi', 'World' ]

const words3 = ['Sunday', ...words, 'Monday', ...words2];
console.log(words3);                    // [ 'Sunday', 'Hello', 'Hi', 'World', 'Monday', 'Good', 'Morning' ]
words3.push(...arr1);
console.log(words3);                    // [ 'Sunday', 'Hello', 'Hi', 'World', 'Monday', 'Good', 'Morning', 1, 2, 3 ]

// Find min and max values from below array
const numbers = [5, 7, -2, 10];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));