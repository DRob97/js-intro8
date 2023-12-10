// Task 1
/*
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if the given number is divisible
by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise,
it will return the number itself.​
*/
const fizzBuzz1 = (num) => {                    // Arrow function called fizzBuzz1 which takes a number as an argument
    if(num % 15 === 0) return 'FizzBuzz';       // If the number is divisible by 3 & 5, return FizzBuzz
    else if(num % 5 === 0) return 'Buzz';       // If the number is divisible by only 5, return Buzz
    else if(num % 3 === 0) return 'Fizz';       // If the number is divisible by only 3, return Fizz
    else return num;                            // Else, return the number
}

console.log(fizzBuzz1(0)); 		// "FizzBuzz"
console.log(fizzBuzz1(1)); 		// 1
console.log(fizzBuzz1(3)); 		// "Fizz"
console.log(fizzBuzz1(5)); 		// "Buzz"
console.log(fizzBuzz1(30)); 	// "FizzBuzz"
console.log(fizzBuzz1(10)); 	// "Buzz"
console.log(fizzBuzz1(15)); 	// "FizzBuzz"
console.log(fizzBuzz1(-15)); 	// "FizzBuzz"

console.log('\n');
// Task 2
/*
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers starting
from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/
const fizzBuzz2 = (num) => {                        // Arrow function called fizzBuzz2 which takes a number as an argument
    const arr = [];                                 // Container array 'arr'
    for(let i = 1; i <= num; i++){                  // Standard i-loop
        if(i % 15 === 0) arr.push('FizzBuzz');      // If the number is divisible by 3 & 5, push FizzBuzz to arr
        else if(i % 5 === 0) arr.push('Buzz');      // If the number is divisible by only 5, push Buzz to arr
        else if(i % 3 === 0) arr.push('Fizz');      // If the number is divisible by only 3, push Fizz to arr
        else arr.push(i);                           // Else, push the number to arr
    }
    return arr;                                     // Return 'arr'
}
console.log(fizzBuzz2(3)); 		// [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); 		// [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); 	// [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); 	// [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); 		// [ 1, 2 ]

console.log('\n');
// Task 3
/*
Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears
in the string.
*/
const findSumNumbers = (str) => {               // Arrow function called findSumNumbers which takes a string argument
    const digits = '1234567890';                // A string representation of the digits 1 - 0
    let stringNum = '';                         // A container string 'stringNum'
    let sum = 0;                                // Sum, initialized to 0
    for(const char of str){                     // for...of loop
        if(digits.includes(char)){              // Check if character is a digit
            stringNum += char;                  // If char is a digit, concatenate to 'stringNum'
        }
        else{
            stringNum += ' ';                   // Else, concatenate a space instead
        }
    }

    const arr = stringNum.split(' ');           // Split 'stringNum' into container array 'arr' by spaces
    const nums = arr.filter(x => x !== '');     // Filter the numbers in 'arr' into 'nums' array

    for(const num of nums){                     // for...of loop
        sum += parseInt(num);                   // Update sum
    }
    return sum;                                 // Return sum
}

console.log(findSumNumbers("abc$"));                // 0
console.log(findSumNumbers("a1b4c  6#"));           // 11
console.log(findSumNumbers("ab110c045d"));          // 155
console.log(findSumNumbers("525"));                 // 525
console.log(findSumNumbers("3 for 10 dollars"));    // 13

console.log('\n');
// Task 4
/*
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears
in the string.
*/
const findBiggestNumber = (str) => {
    const digits = '1234567890';                                    // A string representation of the digits 1 - 0
    let stringNum = '';                                             // A container string 'stringNum'
    let biggestNum = 0;                                             // Variable called biggeestNum, initialized to 0
    for(const char of str){                                         // for...of loop
        if(digits.includes(char)){                                  // Check if character is a digit
            stringNum += char;                                      // If char is a digit, concatenate to 'stringNum'
        }
        else{
            stringNum += ' ';                                       // Else, concatenate a space instead
        }
    }

    const arr = stringNum.split(' ');                               // Split 'stringNum' into container array 'arr' by spaces
    const nums = arr.filter(x => x !== '');                         // Filter the numbers in 'arr' into 'nums' array

    for(const num of nums){                                         // for...of loop
        if(parseInt(num) > biggestNum) biggestNum = parseInt(num);  // Check current num vs biggestNum, update biggestNum if necessary
    }
    return biggestNum;                                              // Return biggestNum
}

console.log(findBiggestNumber("abc$")); 		        // 0
console.log(findBiggestNumber("a1b4c  6#")); 		    // 6
console.log(findBiggestNumber("ab110c045d")); 		    // 110
console.log(findBiggestNumber("525")); 		            // 525
console.log(findBiggestNumber("3 for 10 dollars")); 	// 10

console.log('\n');
// Task 5
/*
Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated
characters in the String.​

NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/
const countOccurrencesOfCharacters = (str) => {         // Arrow function with a very long name which takes a string argument
    if(str === '') return str;                          // If the argument is an empty string, return it
    
    const arr = str.split('');                          // Split given argument into an array 'arr'
    const arr2 = [];                                    // Create an empty container array 'arr2'
    arr.map((element, index) => {                       // Map the elements of 'arr', providing the element and its index
        let counter = 0;                                // Initialize a counter variable to 0
        if(element === arr[index - 1]);                 // If the current element matches the previous one, do nothing
        else {                                          // Else
            do{                                         // Do
                counter = counter + 1;                  // Update the counter
                index++;                                // Update the index
            } while(arr[index] === element)             // While the array at the updated index matches the current element we are mapping
            
            arr2.push([counter, element]);              // Push the counter and currently mapped element to arr2 in their own tiny array
        }
    })
    return arr2.flat().join('');                        // Return arr2 flattened and joined by empty strings
}
console.log(countOccurrencesOfCharacters("")); 		    // ""
console.log(countOccurrencesOfCharacters("abc")); 	    // "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); 	// "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); 	// "2a2A1a”
console.log(countOccurrencesOfCharacters("www" )); 	    // "3w"

console.log('\n');
// Task 6
/*
Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers
as an array. ​

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
const fibonacciSeries1 = (n) => {                       // A.F. which takes a number argument 'n'
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];    // Array of the Fibonacci sequence
    const arrToReturn = [];                             // Container array
    for(let i = 0; i < n; i++){                         // Standard i-loop
        arrToReturn.push(fibonacci[i]);                 // Push fibonacci[i] to container array
    }
    return arrToReturn;                                 // Return container array
}
console.log(fibonacciSeries1(3)); 	// [0, 1, 1]
console.log(fibonacciSeries1(5)); 	// [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); 	// [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); 	// [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); 	// [0]
console.log(fibonacciSeries1(2)); 	// [0, 1]

console.log('\n');
// Task 7
/*
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number
as a number.

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
const fibonacciSeries2 = (n) => {                       // A.F. which takes a number argument 'n'
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];    // Array of the Fibonacci sequence
    return fibonacci[n - 1];                            // Return 'n'th fibonacci element
}

console.log(fibonacciSeries2(2)); 	// 1
console.log(fibonacciSeries2(4)); 	// 2
console.log(fibonacciSeries2(8)); 	// 13
console.log(fibonacciSeries2(9)); 	// 21
console.log(fibonacciSeries2(1)); 	// 0

console.log('\n');
// Task 8
/*
Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique
values from both given arrays.

NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
*/
const findUniques = (arr1, arr2) => {                                   // A.F. which takes 2 arrays as arguments
    const uniqueArr = [];                                               // Container array 'uniqueArr' to be returned
    for(const element of arr1){                                         // for...of loop for arr1
        if(!arr2.includes(element) && !uniqueArr.includes(element)){    // Check if arr2 or uniqueArr include the element
            uniqueArr.push(element);                                    // If not, push it to uniqueArr
        }
    }
    for(const element of arr2){                                         // for...of loop for arr2
        if(!arr1.includes(element) && !uniqueArr.includes(element)){    // Check if arr1 or uniqueArr include the element
            uniqueArr.push(element);                                    // If not, push it to uniqueArr
        }
    }
    return uniqueArr;                                                   // Return uniqueArr
}

console.log(findUniques([], [])); 		                // []
console.log(findUniques([], [1, 2, 3, 2])); 	        // [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 	// [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); 	        // []
console.log(findUniques([-1, -2], [1, 2])); 	        // [-1, -2, 1, 2]

console.log('\n');
// Task 9
/*
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X.
Otherwise, return false.​

NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
*/
const isPowerOf3 = (num) => {           // A.F. which takes a number argument
    for(let i = 0; 3**i <= num; i++){   // Non-standard i-loop, where the condition is 3 to the power of i being less than or equal to the number provided
        if(num === 3**i) return true;   // If the number provided is equal to 3 to the power of i, return true
    }
    return false;                       // If loop is completed and true not returned, return false
}

console.log(isPowerOf3(1)); 	// true
console.log(isPowerOf3(2)); 	// false
console.log(isPowerOf3(3)); 	// true
console.log(isPowerOf3(27)); 	// true
console.log(isPowerOf3(100)); 	// false
console.log(isPowerOf3(81)); 	// true
console.log(isPowerOf3(9)); 	// true