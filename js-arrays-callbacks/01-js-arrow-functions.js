/*
Write a function called product which takes 2 numbers and returns their product
*/

// Regular Syntax
function product1(x, y){        // Regular functions like this one are always hoisted, meaning it can be called anywhere in (next line)
    return x * y;               // the code, no matter where it exists in the code
}

console.log(product1(3, 5));   // 15
console.log(product1(2, 0));   // 0
console.log(product1(4, 3));   // 12

// Function Expression Syntax
const product2 = function(x, y){
    return x * y;
};                             // NOTE: due to this being assigned to a variable, a semicolon is needed after the closing brace here

console.log(product2(3, 5));   // 15
console.log(product2(2, 0));   // 0
console.log(product2(4, 3));   // 12

// Arrow Function Syntax
const product3 = (x, y) => {
    return x * y;
};                             // NOTE: due to this being assigned to a variable, a semicolon is needed after the closing brace here

console.log(product3(3, 5));   // 15
console.log(product3(2, 0));   // 0
console.log(product3(4, 3));   // 12

// If there is only one line in the function, this can also be written as below
const product4 = (x, y) => x * y;

console.log(product4(3, 5));   // 15
console.log(product4(2, 0));   // 0
console.log(product4(4, 3));   // 12

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function named as greeting that outputs 'Hello'
*/

function greeting1(){
    console.log('Hello');
}

const greeting2 = function(){
    console.log('Hello');
};

const greeting3 = () => console.log('Hello');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5
*/


// Regular function syntax
function fizzBuzz1(number) {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
}

// Function Expression Syntax
const fizzBuzz2 = function(number) {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
};

// Arrow Function Syntax
const fizzBuzz3 = number => {   // An arrow function with exactly 1 argument does not need its argument in parentheses
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
};

fizzBuzz1(3)         // 'Fizz'
fizzBuzz2(10)        // 'Buzz'
fizzBuzz3(45)        // 'FizzBuzz'
fizzBuzz1(2)         // '2'