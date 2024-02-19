// Task 1
/*
Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by
another x. Otherwise, return false.

NOTE: This method should be case-insensitive.
*/
const repeatingX = (str) => {
    const strArray = str.split('');                                         // Split the argument into an array by nothing
    let i = 1;                                                              // Initialize 'i' variable with the value 1
    const exes = 'Xx'                                                       // Initialize 'exes' variable with the value 'Xx'
    for(const char of strArray){
        if(exes.includes(char) && exes.includes(strArray[i])) return true;  // Check 'exes' includes current and next character, if so return true
        else i++;                                                           // Else, update i
    }
    return false;                                                           // If code reaches this point, return false
}

console.log('Task 01');
console.log(repeatingX("xTechxGlobalx")); 	// false
console.log(repeatingX("Hello Xx World")); 	// true
console.log(repeatingX("x x")); 		    // false
console.log(repeatingX("")); 		        // false
console.log(repeatingX("xxxxx")); 		    // true

// Task 2
/*
Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. It
returns true if the number is a perfect square and false otherwise.

NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent
of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25.
However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
*/
const isPerfectSquare = (num) => {
    let square = 0;                         // Initialize 'square' variable with the value 0
    for(let i = 0; (i**2) <= num; i++){     // i-loop
        square = i**2;                      // Assign square the value of i squared
        if(num === square) return true;     // Check if number matches the created perfect square, if so return true
    }
    return false;                           // If code reaches this point, return false
}

console.log('\nTask 02');
console.log(isPerfectSquare(25)); 	// true
console.log(isPerfectSquare(24)); 	// false
console.log(isPerfectSquare(0)); 	// true
console.log(isPerfectSquare(1)); 	// true
console.log(isPerfectSquare(-1)); 	// false
console.log(isPerfectSquare(144)); 	// true

// Task 3
/*
Write a function named convertTemperature() which takes a number and a string arguments to be considered as a temperature
value and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.

NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
*/
const convertTemperature = (temp, scale) => {
    if(scale === 'Celsius') return (temp * (9/5) + 32);             // Check for scale, convert temperature to the opposite scale
    else if(scale === 'Fahrenheit') return ((temp - 32) * (5/9))    // Check for scale, convert temperature to the opposite scale
}

console.log('\nTask 03');
console.log(convertTemperature(100, 'Celsius')); 		// 212
console.log(convertTemperature(32, 'Fahrenheit')); 	    // 0
console.log(convertTemperature(0, 'Celsius')); 		    // 32
console.log(convertTemperature(212, 'Fahrenheit')); 	// 100
console.log(convertTemperature(-40, 'Celsius')); 		// -40
console.log(convertTemperature(-40, 'Fahrenheit')); 	// -40

// Task 4
/*
Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers
in the array.
*/
const sumOfEvenNumbers = (arr) => arr.reduce((sum, curr) => curr % 2 === 0 ? sum += curr : sum, 0);
                                    // Above line uses reduce to check if the number is even, and then updates the sum
console.log('\nTask 04');
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )); 		// 30
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )); 	// 110
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )); 	// 0
console.log(sumOfEvenNumbers( [ ] )); 			                            // 0
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )); 			            // 6
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] )); 		            // 150

// Task 5
/*
Write a function named capsOdds() which takes an array argument and returns the array with all the odd index elements
capitalized (converted to uppercase).
*/
const capsOdds = (arr) => {
    for(const element of arr){
        if(arr.indexOf(element) % 2 !== 0){             // Check if index of current element is odd
            let placeHolder = element.toUpperCase();    // Initialize 'placeHolder' variable with the value of the current index of the array, converted to uppercase
            arr[arr.indexOf(element)] = placeHolder;    // Assign the current index of the array with the value stored in 'placeHolder'
        }
    }
    return arr;                                         // Return the array with its updated values
}

console.log('\nTask 05');
console.log(capsOdds(["Hello", "World"])); 			                        // ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])); 		                // ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 	// ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([ ])); 				                                // [ ]
console.log(capsOdds(["John !@#$%", "^&*() Doe"])); 		                // ["John !@#$%", "^&*() DOE"]
