// Function Scope

// console.log(x);      // Error - x is not defined
// console.log(y);      // Error - y is not defined
// console.log(z);      // Error - z is not defined

// Function scope
function anyFunction() {
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}

// console.log(x);      // Error - x is not defined
// console.log(y);      // Error - y is not defined
// console.log(z);      // Error - z is not defined

// Real Example
// Write a function which takes an array and returns how many numbers are even

function countEven(arr){
    let counter = 0;
    for(const number of arr){
        if(number % 2 === 0) counter++;
    }
    return counter;
}

// console.log(counter);   // Error - counter is not defined
console.log(countEven([1, 2, 3, 4, 5]));