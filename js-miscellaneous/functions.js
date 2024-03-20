// 1. Function Declaration (most common variant of function)
function greet1(name){
    console.log(`Hello, ${name}!`)
}
 greet1('John Doe')

// 2. Function Expression
const greet2 = function (name){
    console.log(`Hello, ${name}!`)
}
greet2('Jane Doe')

// 3. Arrow Function - only need parentheses on argument if it accepts one or less arguments
const greet3 = (name) => {
    console.log(`Hello, ${name}!`)
}
greet3('J Dizzle')

// 4. IIFE - Immediately Invoked Function Expression - makes more sense in a browser setting
(function(){
    console.log('I am an IIFE')
})();

// 5. Anonymous functions
(function(){
    console.log('Hi! I am anonymous')
})

// 6. Higher order functions
const doMath = (num1, num2, operation) => {
    return operation(num1, num2);
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

console.log(doMath(8, 4, add));
console.log(doMath(8, 4, subtract));
console.log(doMath(8, 4, multiply));
console.log(doMath(8, 4, divide));

// 7. Callback functions - functions passes as arguments
function fetchData(url, callback){
    // Async operation
    console.log(`Loading ${url}`)
    setTimeout(() => {
        console.log(`Loaded ${url}`)
        callback();
    }, 2000);
}
console.log(fetchData('www.tg.com', () => console.log('callback')))

// Callback Example 2
function greet4(name, callback){
    console.log('Hello, ' + name)
    callback()
}

function goodbye(){
    console.log('Goodbye!')
}

greet4('Mark', goodbye)

// 8. Method functions - functions defined as properties of objects
const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25,
    address: 'Chicago',
    fullName: function(){
        return `${this.fName} ${this.lName}`;
    },
    info: function(){
        return `${this.fullName()}'s age is ${this.age} and their address is ${this.address}.`;
    }
}

console.log(person.fullName());
console.log(person.info());

// 9. Recursive Functions - functions that call themselves
function factorial(n){
    if(n < 0) throw new Error('Invalid input!!!');
    else if(n === 0) return 1;
    else return n * factorial(n - 1);
}

// console.log(factorial(-1)); // This works properly, throwing an error
console.log(factorial(0));
console.log(factorial(4));

// ----------------------------------------------------------- //
// setTimeout
setTimeout(() => {
    console.log('Hello');
}, 3000);

// setInterval
const interval = setInterval(() => {
    console.log('Hello World!')
}, 2000);

setTimeout(() => {
    clearInterval(interval)
    console.log('Execution stopped after 12 seconds')
}, 12100);