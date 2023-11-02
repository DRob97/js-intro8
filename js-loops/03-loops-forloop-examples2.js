// Output each character in TechGlobal
let school = 'TechGlobal';

for(let i = 0; i <= (school.length - 1); i++){
    console.log(school[i]);
}

// Count how many of the letter 'l' are in TechGlobal

let tracker = 0;
school = 'TechGlobal';
for(let i = 0; i < school.length; i++){
    if(school[i].toLowerCase() === 'l') tracker++;
}
console.log(tracker);

// Count the p's in str whilst ignoring cases
let counter = 0;
let str = 'Apple Pineapple';
for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() === 'p') counter++;
}
console.log(counter);

// Print numbers from 1 - 30 (both inclusive)
    // If number is divisible by 3, output 'Fizz' instead
    // If number is divisible by 5, output 'Buzz' instead
    // If number is divisible by both, output 'FizzBuzz'

for(let i = 0; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz'); // condition is better written as i % 15 === 0
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

for(let i = 0; i <= 30; i++){
    if(i % 3 === 0){
        if(i % 5 === 0) console.log('FizzBuzz');
        else console.log('Fizz');
}
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}