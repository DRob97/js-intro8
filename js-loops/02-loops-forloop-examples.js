// Write a program that outputs numbers from 5 to 25
for(let i = 5; i <= 25; i++){
    console.log(i);
}

// Write a program that outputs numbers from 15 to 1
for(let i = 15; i >= 1; i--){
    console.log(i);
}

// Print all even numbers from 0 to 10
for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Write a program that checks numbers 1 - 50, printing all numbers that can be evenly divided by 5
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0) console.log(i);
}

// Write a program that finds the sum of numbers from 1 to 5 (all inclusive)
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}

console.log(sum);

// Write a program that finds the sum of numbers from 10 to 15
let sum2 = 0;
for(let i = 10; i <= 15; i++){
    sum2 += i;
}

console.log(sum2);

// Write a program that generates a random number between 10 and 20 (both inclusive)
// Output all the odd numbers starting from 1 to a random number both inclusive

let j = Math.floor(Math.random() * (20 - 10 + 1) + 10);
for(let i = 1; i <= j; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// Print all the numbers between 2 random numbers in the range of 1 to 10 in ascending

let r1 = Math.floor(Math.random() * (10) + 1);
let r2 = Math.floor(Math.random() * (10) + 1);
let max = Math.max(r1, r2);
let min = Math.min(r1, r2);
for(let i = min; i <= max; i++){
    console.log(i);
}