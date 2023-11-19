// Spread operator with arrays
const numbers = [1, 2, 3];

// Create a new array that stores all the elements of numbers array, and 4, 5, 6 (this is concatenation)
const newArr = [...numbers, 4, 5, 6];

console.log(newArr);

// Spread numbers to individual arguments
console.log(Math.max(...numbers));

// Spread operator with objects
const table1 = {
    use: 'dining',
    material: 'wood'
};

const table2 = {
    ...table1
};

const table3 = {
    ...table1,
    isExtendable: true
};

const table4 = {
    ...table3,
    shape: 'round'
};

console.log(table1);
console.log(table2);
console.log(table3);
console.log(table4);