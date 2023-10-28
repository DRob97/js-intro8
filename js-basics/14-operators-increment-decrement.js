/*
-- decrement
++ increment

These operators are used to increase or decrease the value of a variable by 1
*/

let num = 5;

num++; // num is 5 here but during next use it will be 6

console.log(num); // 6

let num2 = 10;

num2--;

console.log(num2);

// post-increment vs pre-increment
let a = 5, b = 5;
let x = a++; // post-increment: a is still 5
let y = ++b; // pre-increment: b is already 6

console.log(a); //6
console.log(x); //5
console.log(b); //6
console.log(y); //6

let n1 =3; // 3

++n1; // 4

let n2 = n1++; // n1 = 4, n2 = 4

n2++; // 4

console.log(n1);    //5
console.log(n2);    //5

let number1 = 1, number2 = 3;   // n1 = 1, n2 = 3

number1 += ++number2;           // n1 = 5, n2 = 4

let number3 = --number1;        // n3 = 4, n1 = 4

number3--;                      //n3 = 4

console.log(number1);           //4
console.log(number2);           //4
console.log(number3);           //3