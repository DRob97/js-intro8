/*
Assume you are given an array that stores numbers
    Count how many positive numbers you have in the array
    Count how many even numbers exist in the array
    Count how many numbers in the array are evenly divisible by 5
*/
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let isPositive = 0;
for(const num of numbers){
    if(num > 0) isPositive++;
}

console.log(`There are ${isPositive} positive numbers in this array.`);

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let isEven = 0;
for(const num of numbers){
    if(num % 2 === 0) isEven++;
}
console.log(`There are ${isEven} even numbers in this array.`);

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let divisibleByFive = 0;
for(const num of numbers){
    if(num % 5 === 0) divisibleByFive++;
}
console.log(`There are ${divisibleByFive} numbers in this array that are divisible by 5.`);