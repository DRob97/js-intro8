// Syntax Error
// console.log('Hello'; // SyntaxError: missing ) after argument list
// console.log('Hello); // SyntaxError: Invalid or unexpected token

// ReferenceError
// consol.log('Hello'); // ReferenceError: consol is not defined
// console.log(fullname); // ReferenceError: fullname is not defined


// TypeError
let name;
console.log(name.toUpperCase()); // TypeError: Cannot read properties of undefined (reading 'toUpperCase')

const pi = 3.14;
pi = 2; // TypeError: Assignment to constant variable.
console.log(pi);

let obj = null; 
console.log(obj.property); // TypeError: Cannot read properties of null (reading 'property')


let number = 10;
number(); // TypeError: number is not a function