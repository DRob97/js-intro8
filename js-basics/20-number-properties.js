console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MIN_SAFE_INTEGER);

// Number functions: functions are specific components executed to perform a task

console.log(1 + 2);             // 3
console.log("1" + 2);           // 12

let a = 5, b = 10;
console.log(a + b);             // 15
console.log(a.toString() + b);  // 510
console.log(a + b.toString());  // 510

let i1 = 100.999, i2 = 10.499;
console.log(i1.toFixed());  // 101
console.log(i2.toFixed());  // 10

console.log(i1.toFixed(2)); // 101.00
console.log(i2.toFixed(2)); // 10.50
// ***
console.log(i2.toFixed(5)); // 10.49900

console.log(i1.toPrecision(3)); // 101
console.log(i2.toPrecision(3)); // 10.5
// ***
console.log(i2.toPrecision(10)); // 10.49900000

// Converting other data types to numbers
let str = "10", number = 1, myB = true;

console.log(str + number);  // "101"
console.log(Number(str) + number);  // 11
console.log(parseInt(str) + number);  // 11
console.log(parseFloat(str) + number);  // 11

console.log(myB + number); // 2
console.log(Number(myB) + number); // 2

// parseInt() vs parseFloat()

let str1 = "10.5", str2 = "10";

console.log(Number(str1) + 1);      //11.5
console.log(parseInt(str1) + 1);    //11
console.log(parseFloat(str1) + 1);  //11.5

console.log(Number(str2) + 1);      //11
console.log(Number.parseInt(str2) + 1);    //11
console.log(Number.parseFloat(str2) + 1);  //11

// If you want to check if a number is safe or not | an integer(whole number) or not
// 10 -> safe integer
// 9348679348567983467934 -> not a safe integer

console.log(Number.isSafeInteger(10));  // True
console.log(Number.isInteger(10));      // True

console.log(Number.isSafeInteger(9348679348567983467934));  // False
console.log(Number.isInteger(9348679348567983467934));      // True