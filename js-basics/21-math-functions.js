let num1 = 5;
let num2 = 10;
let num3 = 7;
let num4 = -5;
let num5 = -8;

//console.log(Math.PI);   // 3.141592653589793
// Max number: num2 = 10
let max = Math.max(num1, num2, num3, num4, num5);
console.log(max);
// Min number: num5 = -8
let min = Math.min(num1, num2, num3, num4, num5);
console.log(min);

// Math.abs() is used to find the absolute value of a number
console.log(Math.abs(num5));

// Rounding numbers
let a = 10.49, b = 10.50, c = 10.51, d = 10.99;

// Math.ceil()
console.log(Math.ceil(a));  // 11, for this and the following 3
console.log(Math.ceil(b));
console.log(Math.ceil(c));
console.log(Math.ceil(d));

// Math.floor()
console.log(Math.floor(a)); // 10, for this and the following 3
console.log(Math.floor(b));
console.log(Math.floor(c));
console.log(Math.floor(d));

// Math.round()
console.log(Math.round(a)); // 10
console.log(Math.round(b)); // 11 for this and the following 2
console.log(Math.round(c));
console.log(Math.round(d));

// Math.trunc()
console.log(Math.trunc(a)); // 10 for this and the following 3
console.log(Math.trunc(b));
console.log(Math.trunc(c));
console.log(Math.trunc(d));

// Math.pow()
console.log(Math.pow(2, 3));    //8
console.log(2 ** 3);            //8

// Math.sqrt()
console.log(Math.sqrt(64));     //8

// Math.random () - gives random number (n) between 0 and 1: 0 <= n < 1
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 10));

// Generate a random number between 7 and 9 -> 7, 8, 9
// Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));
console.log(Math.floor(Math.random() * (9 - 7 + 1) + 7));