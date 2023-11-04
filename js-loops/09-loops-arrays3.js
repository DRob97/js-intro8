/*
Auume you are given an array that stores numbers
Find the sum of all the numbers
Find the average of the numbers
Find the sum of numbers that have an even index
*/

const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 0;
for(const num of numbers){
    sum += num;
}
let average = sum / numbers.length;
console.log(`The sum of the numbers in the array is ${sum}, and the average is ${average}.`);

numbers = [3, 4, 7, 3, 2, 2, 7];
let sumEvenIndex = 0;
for(let i = 0; i < numbers.length; i++){
    if(i % 2 === 0) sumEvenIndex += numbers[i];
}

console.log(`The sum of the numbers that occupy even indices in the array is ${sumEvenIndex}.`);
// for...of loop follows
/*
let sumOfEvenIndex = 0;
let index = 0;
for(const num of numbers) {
    if(index % 2 === 0) sumOfEvenIndex += num;
    index++;
}
console.log(sumOfEvenIndex);
*/

// Find the product of all the numbers in the following array
const nums = [3, 4, 7, 3, 2];
let product = 1;
for(const element of nums){
    product *= element;
}

console.log(`The product of the numbers in the array is ${product}.`);

nums = [3, 4, 7, 3, 2];
product = 1;
for(let i = 0; i < nums.length; i++){
    if(i % 2 !== 0) product *= nums[i];
}

console.log(`The product of the numbers in the array which occupy odd indicies is ${product}.`);

