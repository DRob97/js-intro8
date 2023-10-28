// Kick off
function kickOff(){
    console.log('Start the meeting');
    console.log('Create a file');
    console.log('Start coding');
}

kickOff();

// Create a function that outputs 'Good Morning'
function greet() {
    console.log('Good Morning');
}

greet();

// Functions with arguments
// Creat a function that takes an argument (name in this case) and outputs 'Hello (name)'
sayHello('John');
function sayHello(name){
    console.log(`Hello ${name}`);
}

// Return type functions
// Write a function that takes 2 arguments and returns their sum
function sum(arg1, arg2){
    return arg1 + arg2;
}

let result1 = sum(3, 5);
console.log(result1);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes 3 arguments and returns their product
function productOf3(x, y, z){
    return x * y * z;
}
let product1 = productOf3(1, 2, 3);
let product2 = productOf3(3, 7, 10);
console.log(product1);
console.log(product2);