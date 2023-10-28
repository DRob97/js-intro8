/*
Write a function called getRandomNumber that takes 2 args and return a random number between them (both inclusive)
*/

function getRandomNumber(a, b){
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(15, 17));
console.log(getRandomNumber(8, 5));