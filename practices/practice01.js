///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Problem 1
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/

let var1 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
let var2 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
let var3 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
let var4 = Math.floor(Math.random() * (50 - 0 + 1) + 0);
let var5 = Math.floor(Math.random() * (50 - 0 + 1) + 0);

console.log("The random number * 5 = " + (var1 * 5));

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

/*
    Soultion:

    Math.random() * (max - min + 1 ) + min

    Pseudo Code:

    1. Find random number between 0 & 50, both inclusive (did not specify integer)
    2. Multiply that random number with 5
    3. Log the result
*/

const max = 50, min = 0;
const randomNumber = Math.random() * (max - min + 1) + min; // 0 <= number < 1
console.log(randomNumber);
console.log("The random number * 5 = " + (randomNumber * 5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Problem 2
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/
const max1 = 100, min1 = 50;
const randomNumber1 = Math.random() * (max1 - min1 + 1) + min1;
let remainder1 = randomNumber1 % 10;
console.log("The random number % 10 = " + (remainder1));

/*
    Soultion:

        Pseudo Code:

    1. Find random number between 50 & 100, both inclusive (did not specify integer but this time we will assume it to be one)
    2. Modulus that random number with 10
    3. Log the result 
*/

const max2 = 100, min2 = 50;
const randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
let remainder2 = randomNumber2 % 10;
console.log(randomNumber2);
console.log("The random number % 10 = " + (remainder2));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Problem 3
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/
const maxNum1 = 25, maxNum2 = 50, maxNum3 = 75, maxNum4 = 100;
const minNum1 = 1, minNum2 = 26, minNum3 = 51, minNum4 = 76;
const rNum1 = Math.random() * (maxNum1 - minNum1 + 1 ) + minNum1;
const rNum2 = Math.random() * (maxNum2 - minNum2 + 1 ) + minNum2;
const rNum3 = Math.random() * (maxNum3 - minNum3 + 1 ) + minNum3;
const rNum4 = Math.random() * (maxNum4 - minNum4 + 1 ) + minNum4;
let abs1 = Math.abs(rNum4 - rNum1);
let abs2 = Math.abs(rNum3 - rNum2);
let numAverage = (rNum1 + rNum2 + rNum3 + rNum4) / 4;

console.log("Difference of max and min = " + abs1);
console.log("Difference of second and third = " + abs2);
console.log("Average of all = " + numAverage);

/*
    Solution:
        
        Pseudo code:
        1. Find 4 random numbers
        2. Find abs difference between max and min
        3. Find abs difference between 2nd and 3rd
        4. Find average of all 4

*/

