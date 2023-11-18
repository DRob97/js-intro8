// Check if you can access this info here
console.log(x);     // undefined
// console.log(y);  // Error
// console.log(z);  // Error
/*
// JS moves delcaration of the variables created with var to the top of the file (hoisting) but not the value 
// If you try to retrieve a var value before its assignment you will get undefined instead of an error
*/
// Globally delcared and assigned 3 variables
var x = 10;
let y = 11;
const z = 12;


// Check if you can access this info here
console.log(x);     // 10
console.log(y);     // 11
console.log(z);     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Invoking all the functions
funcA();        // 'This is function A'
// funcB();     // Error
// funcC();     // Error

// Functions B & C are not hoisted because of how they are declared (stored as variables)

// Tradidional function declaration
function funcA(){
    console.log('This is function A');
}
// Function Expression
const funcB = function(){
    console.log('This is function B');
};
// Arrow function
const funcC = () => {
    console.log('This is function C');
};

// Invoking all the functions
funcA();
funcB();
funcC();