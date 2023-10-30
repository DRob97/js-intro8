const arr1 = [1, 2, 5, 100, 21];
const arr2 = ['Ali', 'Max', 'Johnson', 'John', 'Alex', 'bob', 'alice'];

const arr3 = arr2.sort();

console.log(arr3);          // [ 'Alex', 'Ali', 'John', 'Johnson', 'Max', 'alice', 'bob' ]
console.log(arr2);          // [ 'Alex', 'Ali', 'John', 'Johnson', 'Max', 'alice', 'bob' ]

arr1.sort();
console.log(arr1);          // [ 1, 100, 2, 21, 5 ]

const numbers = [1, 2, 5, 100, 21];
numbers.sort((x, y) => x - y);      // Sorts ascending
// numbers.sort((x, y) => y - x);     // Sorts descending
console.log(numbers);        // [ 1, 2, 5, 21, 100 ]