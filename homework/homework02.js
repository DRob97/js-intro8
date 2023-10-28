// Task 1
let str1 = '5', str2 = '2';
let num1 = parseInt(str1), num2 = parseInt(str2);

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);

// Task 2
let s1 = '200', s2 = '-50';
let variable1 = parseInt(s1), variable2 = parseInt(s2);

console.log(`The greatest value is = ${Math.max(variable1, variable2)}`);
console.log(`The smallest value is = ${Math.min(variable1, variable2)}`);
console.log(`The average is = ${(variable1 + variable2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(variable1 - variable2)}`);

// Task 3
let min = 1, max = 50;
const var1 = Math.floor(Math.random() * (max - min + 1 ) + min);
const var2 = Math.floor(Math.random() * (max - min + 1 ) + min);
let absDiff = Math.abs(var1 - var2);
console.log(`The absolute difference between numbers is = ${absDiff}`);

// Task 4
let min2 = 1, max2 = 50;
const rNum1 = Math.floor(Math.random() * (max2 - min2 + 1 ) + min2);
const rNum2 = Math.floor(Math.random() * (max2 - min2 + 1 ) + min2);
const rNum3 = Math.floor(Math.random() * (max2 - min2 + 1 ) + min2);
const rNum4 = Math.floor(Math.random() * (max2 - min2 + 1 ) + min2);
const rNum5 = Math.floor(Math.random() * (max2 - min2 + 1 ) + min2);
console.log(`The max value = ${Math.max(rNum1, rNum2, rNum3, rNum4, rNum5)}`);
console.log(`The min value = ${Math.min(rNum1, rNum2, rNum3, rNum4, rNum5)}`);

// Task 5
let min3 = 50, max3 = 100;
const randNum1 = Math.floor(Math.random() * (max3 - min3 + 1 ) + min3);
const randNum2 = Math.floor(Math.random() * (max3 - min3 + 1 ) + min3);
const randNum3 = Math.floor(Math.random() * (max3 - min3 + 1 ) + min3);
console.log(`The number 1 = ${randNum1}`);
console.log(`The number 2 = ${randNum2}`);
console.log(`The number 3 = ${randNum3}`);
console.log(`The sum of numbers is = ${randNum1 + randNum2 + randNum3}`);

// Task 6
let min4 = 1, max4 =100;
const rVar1 = Math.floor(Math.random() * (max4 - min4 + 1 ) + min4);
const rVar2 = Math.floor(Math.random() * (max4 - min4 + 1 ) + min4);
const rVar3 = Math.floor(Math.random() * (max4 - min4 + 1 ) + min4);
console.log(rVar1 > 25 && rVar2 > 25 && rVar3 > 25);

// Task 7
let name = "David";
console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);