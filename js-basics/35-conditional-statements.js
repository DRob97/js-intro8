// Teenage
/*
const max = 100, min = 0;
let age = Math.floor(Math.random() * (max - min + 1 ) + min);
*/
let age = 13;
if(age >= 10 && age <= 19) {
    console.log(`${age} is a teenage!`);
}

else{
    console.log(`${age} is not a teenage`);
}

console.log('End of the program');

// Another example of if else
let num1 = 5, num2 = 10;
if(num1 > num2){
    console.log(`The absolute difference is ${num1 - num2}`);
}
else{
    console.log(`The absolute difference = ${num2 - num1}`);
}