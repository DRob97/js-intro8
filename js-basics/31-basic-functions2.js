/*
Write a function called isEven that takes an argument and returns true if the arg is even, false otherwise
*/
// My Solution

function myIsEven(x){
    let y = (x % 2);
    return y < 1;
}

console.log(myIsEven(3));
console.log(myIsEven(4));

// Akin's Soultion
function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(-2));
console.log(isEven(-7));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function called is odd, that does the opposite of the above function
*/

function isOdd(a){
    return a % 2 !== 0;
}

console.log(isOdd(7));
console.log(isOdd(4));
console.log(isOdd(-1));
console.log(isOdd(-22));
