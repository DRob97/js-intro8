/*
Write a function that takes a string name, and logs 'Hello {name}'
*/

const greet = (name = 'NONAME') => console.log(`Hello ${name}`);
greet('John');
greet();

function multiply(num1, num2 = 1){
    console.log(num1 * num2);
}

multiply(3, 5);
multiply(3);

function sum(num1, num2 = 0, num3 = 0){
    console.log(num1 + num2 + num3);
}

sum(1, 2, 3);
sum(1, 2);
sum(1, 2, 3);

/*
Write a function that takes 2 arguments
    First and second arguments are numbers
    Third argument is a boolean

Function name is addOrSubtract
If the boolean is true, add the given numbers
If the boolean is false, subtract the given numbers,
If the boolean is not provided, still add the numbers
*/

function addOrSubtract(num1, num2, bool = true){
    if(bool) console.log(num1 + num2);  // no need for bool === true in the if statement, as bool being true will already trigger it
    else console.log(num1 - num2);
}

// const addOrSubtract = (num1, num2, bool = true) => bool ? console.log(num1 + num2) : console.log(num1 - num2);

addOrSubtract(2, 3, true);          // 5
addOrSubtract(10, 4, false);        // 6
addOrSubtract(7, 8);                // 15