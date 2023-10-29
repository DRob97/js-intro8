const names = ['Alex', 'John'];

// Add another element to the tail of the array
names.push('Max');
console.log(names);     // [ 'Alex', 'John', 'Max' ]
names.pop();
console.log(names);     // [ 'Alex', 'John' ]

// Can push multiple elements at the same time
names.push('Max', 'Jessie', 'Adam');
console.log(names);     // [ 'Alex', 'John', 'Max', 'Jessie', 'Adam' ]
/*
names.pop(2);           // No matter the argument, still only removes 1 element at a time
console.log(names);     // [ 'Alex', 'John', 'Max', 'Jessie' ]
*/
// Do these methods change the original array?  YES, they modify the original array
let resultOfPush = names.push('Mark');      // Returns the new length of the array
let resultOfPop = names.pop();              // Returns the element removed
console.log(resultOfPush);
console.log(resultOfPop);


// shif() and unshift()
const numbers = [10, 13, 17, 5, 2];
let resultOfUnshift = numbers.unshift(100);
console.log(numbers);                       // [ 100, 10, 13, 17, 5, 2 ]
console.log(resultOfUnshift);               // 6; returns new length of array
let resultOfShift = numbers.shift();
console.log(numbers);                       // [ 10, 13, 17, 5, 2 ]
console.log(resultOfShift);                 // 100; returns element removed

numbers.unshift(200, 300, 400, 500);        // Can add multiple elements at the same time
console.log(numbers);