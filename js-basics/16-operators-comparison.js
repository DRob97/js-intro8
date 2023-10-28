let num1 = 3;
let num2 = 5;
let num3 = 3;
let num4 = "3";
let num5 = "5";

// == checks if two variable values are equal (data types are not considered)
console.log(num1 == num3); // true
console.log(num1 == num2); // false

console.log(num1 == num4); // true
console.log(num1 + 2 == num5); // true

// === checks if two variable values and their data types are equal (Strict Equality)
console.log(num1 === num3); // true
console.log(num1 === num2); // false

console.log(num1 === num4); // false
console.log(num1 + 2 === num5); // false

// != vs !== These are used to check if two variables are not equal
console.log(num1 != num3); // false
console.log(num1 != num2); // true

console.log(num1 != num4); // false
console.log(num1 + 2 != num5); // false

console.log(num1 !== num3); // false

// > vs < are used to check if two variables are greater or less than each other

console.log(5 > 2);             // True
console.log(35 < 25 * 2);       // True

// >= vs <= are used to check if two variables are greater or less than or equal to each other
console.log(3 < 3);             // false
console.log(3 <= 3);            // true
console.log(2 * 5 + 3 >= 13);   // true
// tricky part
console.log("3" + "5" > 30);    // true
console.log(true > false);      // in JS true is considered 1, and false is considered 0
console.log("Hello" > "");      // True, as an actual text is considered as true, which is considered (cont below)
                                // as 1, whilst empty strings are considered to be false
console.log(null === undefined); // False given the difference in data types
console.log(null == undefined); // True as both null and undefined are considered to be false
console.log(NaN == false);      // False