let num1 = 5, num2 = 17;

for(let i = num1; i <= num2; i++){
    if(i % 2 === 0) console.log(i);
}

for(let i = num1; i <= num2; i++){
    if(i % 2 !== 0) continue;
    console.log(i);
}

// Print all the numbers from 3 to 12 inclusive
for(let i = 3; i <= 12; i++){
    if(i === 5 || i === 7) continue;
    console.log(i);
}

// Generate a new random number between 5 and 15 (both inclusive) until you get 10

while(true){
    let random = Math.floor(Math.random() * 11 + 5);
    console.log(random);
    if(random === 10) break;
}

// Find the first element that is divisible by 7
const numbers = [2, 5, 10, 14, 21, 28, 7];
let firstDivisible7;
for(const num of numbers){
    if(num % 7 === 0){
        firstDivisible7 = num;
        break;
    }
}
console.log(firstDivisible7);