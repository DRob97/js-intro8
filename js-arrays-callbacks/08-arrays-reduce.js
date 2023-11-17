/*
array.reduce((accumulator, current) => {}, initialValue);
*/
const numbers = [5, 10, 100];

// sum of the numbers (115)
const sum = numbers.reduce((sum, curr) => {
    return sum + curr;
}, 0);
console.log(sum);   // 115

// count the numbers divisible by 10        // 2
// count the even numbers                   // 2
const count10 = numbers.reduce((count10, curr) => curr % 10 === 0 ? count10 + 1 : count10, 0);

console.log(count10);   // 2

const countEven = numbers.reduce((countEven, curr) => curr % 2 === 0 ? countEven + 1 : countEven, 0);

console.log(countEven); // 2
// find the max number                      // 100
// find the min number                      // 5
const max = numbers.reduce((max, curr) => max = Math.max(max, curr), -Infinity);
console.log(max);
const min = numbers.reduce((min, curr) => min = Math.min(min, curr), Infinity);
console.log(min);