// Arrays
const students = ["John", "Max", "Jane", "Alex", "Alice"]; // each data point in the array is known as an element
const students2 = new Array("John", "Jane", "Alex"); // not preferred but need to know we can make an array this way (this syntax)

// How to output an individual element of an array using the index of the element
console.log(students[2]);
console.log(students[4]);
console.log(students[0]);

console.log(typeof students);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 5, 7];
console.log(numbers[2]);
let numberAtIndex2 = numbers[2];
console.log(numberAtIndex2);

/*
    When to create separate variables to reference elements in an array?
    If you will reference the number more than once, it is recommended to create a new variable for it
*/

// How to update an existing element - possible using index
console.log(numbers); // [1, 2, 5, 7]
numbers[0] = 25;
console.log(numbers); // [25, 2, 5, 7]

const cities = ["Berlin", "Chicago", "Toronto", "Miami"];
console.log(cities.length);
let size = cities.length;   // elements.length
console.log(size);