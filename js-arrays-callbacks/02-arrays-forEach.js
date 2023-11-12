const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name to the console
names.forEach(name => console.log(name));

// Output first letter of each name
names.forEach(name => console.log(name[0]));

// Output each name uppercased
names.forEach(name => console.log(name.toUpperCase()));

// Output names that start with 'J'
names.forEach(name => {
    if(name.startsWith('J')) console.log(name);
});

// Count how many names has 4 letters
let counter = 0;
names.forEach(name => {                 // Could make this 1 line using ternary
    if(name.length === 4) counter++;
});
console.log(counter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [5, 10, 3, 0, -2];

// Print each number
numbers.forEach(num => console.log(num));

console.log('\n')
// Print each number multiplied by 5
numbers.forEach(num => console.log(num * 5));

console.log('\n')
// Print true for each even number, and false for each odd number
numbers.forEach(num => console.log(num % 2 === 0));

console.log('\n')
// Create a new array from the elements, which each element multiplied by 3
const numbersTimes3 = [];
numbers.forEach(num => numbersTimes3.push(num * 3));
console.log(numbersTimes3);

console.log('\n')
numbers = [5, 10, 3, 0, -2];
// Create a new array the stores even numbers
const evenNumbers = [];
numbers.forEach(num => num % 2 === 0 ? evenNumbers.push(num) : num);
console.log(evenNumbers);