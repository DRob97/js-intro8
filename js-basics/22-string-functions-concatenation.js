// creating a variable that stores string
let firstName = "John";
console.log(firstName);

let lastName = `Doe`;   // Can use back ticks but this is used specifically for embedding
console.log(lastName);

console.log("The full name is " + firstName + " " + lastName + ".");

// ES6 introduced backticks (` `) which are known as string templates
// String templates make variable or expression insertion easier/better

console.log(`The full name is ${firstName} ${lastName}.`);

// Task 11 from homework 1
let favBook = "JS Algorithms & Data Structures";
let favColor = "Blue";
let favNumber = 7;

console.log(`The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`);

// Task 12
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    emailAddress: "johndoe@gmail.com",
    phoneNumber: "(123) 123 1234",
    address: "123 st, Chicago, IL, 12345",
            }

console.log(`\tUser who joined this program is ${user.firstName} ${user.lastName}. ${user.firstName}\'s age is ${user.age}.
${user.firstName}\'s email address is ${user.emailAddress}, phone number is ${user.phoneNumber},
and address is ${user.address}.`);

// Interpolation
let quant = 5, product = "Pen", price = 2;
// Output: I bought 5 Pens for $10.
console.log("I bought " + quant + " " + product + "s for $" + (quant * price) + ".");   // Old way
console.log(`I bought ${quant} ${product}s for $${(quant * price)}.`);   // New way
