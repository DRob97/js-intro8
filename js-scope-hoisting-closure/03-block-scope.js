// Block scope is introduced with ES6

console.log(x);     // undefined
// console.log(y);  // Error - y is not defined
// console.log(z);  // Error - z is not defined

// Block scope
{
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}

console.log(x);     // 10
// console.log(y);  // Error - y is not defined
// console.log(z);  // Error - z is not defined