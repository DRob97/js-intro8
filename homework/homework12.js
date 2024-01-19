// Task 1
/*
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as
zero.
*/
const makeNegative = (num) => {     // Arrow function taking a number argument (num)
    if(num > 0) return num * (-1);  // Check if number is greater than 0, if true return number times -1
    else return num;                // Else return the number
}

console.log('Task 1:');

console.log(makeNegative(10));   	// -10
console.log(makeNegative( -7));   	// -7
console.log(makeNegative( 0));    	// 0
console.log(makeNegative(0.45));  	// -0.45

console.log('\n');
// Task 2
/*
Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines if the sum of these numbers is
odd or even.
*/
const isSumEvenOrOdd = (x, y, z) => {           // Arrow function taking three number arguments (x, y, z)
    if((x + y + z) % 2 === 0) return 'even';    // Check if the sum of the numbers is divisible by 2, if true return even
    else return 'odd';                          // Else return odd
}

console.log('Task 2:');

console.log(isSumEvenOrOdd(0, 1, 4)); 	    // "odd"
console.log(isSumEvenOrOdd(0, -1, -5));   	// "even"
console.log(isSumEvenOrOdd(0, 0, 0)); 	    // "even"
console.log(isSumEvenOrOdd(7, 1, 9));    	// "odd"
console.log(isSumEvenOrOdd(1, 1, 1));    	// "odd"

console.log('\n');
// Task 3
/*
Write a function named decimal2() which takes an array of numbers as an argument and returns the array with the same numbers
rounded up or down and represented with only two decimals.
*/
const decimal2 = (arrNum) => arrNum.map(num => num.toFixed(2)); // Arrow function taking an array argument (arrNum)
                                                                    // Above function returns the array mapped with decimals fixed to 2
console.log('Task 3:');

console.log(decimal2([94.356, 8.9752])); 		            // [ 94.36, 8.98 ]
console.log(decimal2([76.62, 128.4, 84])); 		            // [ 76.62, 128.4, 84 ]
console.log(decimal2([20987, 3.53245, 12.345, 32.9])); 	    // [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2([ ])); 			                    // [  ]
console.log(decimal2([4.35623, 8.9742])); 		            // [ 4.36, 8.97 ]

console.log('\n');
// Task 4
/*
Write a function named myPow() which takes two numbers, x and n, as its arguments and returns x to the power of n without
using Math.pow(). 3 to the power of 3 is 3*3*3 = 27.

NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.
*/
const myPow = (x, n) => x**n;   // Arrow function taking two number arguments (x, n) which returns x to the power of n

console.log('Task 4:');

console.log(myPow(3, 3)); 	// 27
console.log(myPow(10, 1)); 	// 10
console.log(myPow(100, 0)); // 1
console.log(myPow(1, 1)); 	// 1
console.log(myPow(4, 2)); 	// 16
console.log(myPow(0, 0));   // 1
console.log(myPow(5, 3)); 	// 125

console.log('\n');
// Task 5
/*
Write a function named findLongestWord() which takes a string as input and returns the longest word in the string.

NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then return the first occurrence.
*/
const findLongestWord = (str) => {      // Arrow function taking a string argument (str)
    if(!str.trim()) return '';          // Check if the string, trimmed, has any value; if not return an empty string

    const splitString = str.split(' '); // Split the string into an array by spaces (splitString)
    return splitString.reduce((longest, current) => current.length > longest.length ? longest = current : longest, '');
                                        // Above line returns the longest string stored in the array using reduce
}

console.log('Task 5:');

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 	// "jumped"
console.log(findLongestWord("This is a sample string for testing")); 		    // "testing"
console.log(findLongestWord("One two ten")); 				                    // "One"
console.log(findLongestWord("")); 					                            // ""
console.log(findLongestWord("     ")); 					                        // ""