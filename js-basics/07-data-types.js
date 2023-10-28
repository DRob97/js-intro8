// strings: used to store text data

let myName = "John";
let myCity = "Chicago";
let mySchool = "TechGlobal";

// strings can be stroed in single OR double quotes

console.log(myName);
console.log(typeof myName); //using typeof gives the data type of a variable

let ssn = "123-45-6789";
console.log(typeof ssn);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// numbers
// numbers stored as variables without quotations around them
let age = 45;

console.log(age);
console.log(typeof age);

let balance = 100.5;
console.log(balance);
console.log(typeof balance);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//we can write some messages to clearly output our data to console
let fullName = "John Doe";
let favNumber = 7;
let dailyExpense = 65.5;

console.log("The full name of the person is = " + fullName);
console.log("The favorite number of the person is = " + favNumber);
console.log("The daily expenses of the person is = " + dailyExpense);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bloolean
// it is sed to store either true or false or an expression that evaluates to true or fales

let isTodaySaturday = true;
let areStudentInPerson = false;

let b1 = 5 > 3; // true
let b2 = 5 * 2 == 10; // true
let b3 = 10 < 7; // false
let b4 = 5 >= 5; // true

console.log(isTodaySaturday);
console.log(areStudentInPerson);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

console.log(typeof b1);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// undefined is used when vaiable value is not initialized
let var1;
let var2 = undefined;

console.log(var1);
console.log(var2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// null is used to state that the variable does not point to any data or value
// null is an express statement that something has no value vs being undefined
let var3 = null;

console.log(var3);

console.log(typeof var3); //object
console.log(typeof null); //object

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BigInt is used to store numbers that contain more than 15 digits
let number = 1234567891234567; //works correctly at 15 digits
let number2 = 92345678912345678n; // needs an n at the end to make it work 

console.log(number); //
console.log(number2); //
console.log(typeof number2); //

let number3 = BigInt("92345678912345678"); //another syntax for BigInt that doesn't require n at the end of the number
console.log(typeof number3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let maxSafeNumber = Number.MAX_SAFE_INTEGER;
let minSafeNumber = Number.MIN_SAFE_INTEGER;

console.log(maxSafeNumber);
console.log(minSafeNumber);