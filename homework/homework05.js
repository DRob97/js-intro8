// Task 1
function countPos(arr){                                 // Create a function called "countPos" that takes an array as an argument
    let pos = 0;                                        // Initialize a tracker variable called "pos" and set it to 0
    for(const x of arr){                                // for...of loop to go through the array
        if(x > 0) pos++;                                // Check if the given element is positive, if so increment "pos"
    }
    return pos;                                         // return "pos"
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));      	// 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 	// 4
console.log(countPos([0, -1, -2, -3])); 		        // 0

// Task 2
function countA(str){                                   // Create a function called "countA" that takes a string as an argument
    let aCounter = 0;                                   // Initialize a tracker variable called "aCounter" and set it to 0
    let two_As = 'Aa';                                  // Create a string called "two_As" consisting of 'A' and 'a'
    for(const letter of str){                           // for...of loop to go through the letters of the string
        if(two_As.includes(letter)) aCounter++;         // Check if current letter is 'A' or 'a'; if so increment "aCounter"
    }
    return aCounter;                                    // return "aCounter"
}

console.log(countA("TechGlobal is a QA bootcamp"));      	// 4
console.log(countA("QA stands for Quality Assurance")); 	// 5
console.log(countA("Cypress"));                  			// 0

// Task 3
function countVowels(str){                                  // Create a function called "countVowels" that takes a string as an argument
    let vowelCount = 0;                                     // Initialize a tracker variable called "vowelCount" and set it to 0
    for(const letter of str){                               // for...of loop to go through the letters of the string
        if('AEIOUaeiou'.includes(letter)) vowelCount++;     // Check if current letter is a vowel; if so increment "vowelCount"
    }
    return vowelCount;                                      // return "vowelCount"
}

console.log(countVowels("Hello"));           		// 2
console.log(countVowels("Hello World")); 	    	// 3
console.log(countVowels("JavaScript is fun")); 		// 5
console.log(countVowels("")); 			            // 0

// Task 4
function countConsonants(str){                                  // Create a function called "countConsonants" that takes a string as an argument
    let consonantCount = 0;                                     // Initialize a tracker variable called "consonantCount" and set it to 0
    for(const letter of str){                                   // for...of loop to go through the letters of the string
        if(!'AEIOUaeiou'.includes(letter)) consonantCount++;    // Check if current letter is not a vowel; if so increment "consonantCount"
    }
    return consonantCount;                                      // return "consonantCount"
}

console.log(countConsonants("Hello"));           		// 3
console.log(countConsonants("Hello World")); 	    	// 8
console.log(countConsonants("JavaScript is fun")); 		// 12
console.log(countConsonants("")); 			            // 0

// Task 5
function countWords(str){                               // Create a function called "countWords" that takes a string as an argument
    str = str.trim();                                   // Trim the string
    const array = str.split(' ');                       // Split the string into an array via whitespaces
    return array.length;                                // return the length of the array
}

console.log(countWords("     Javascript is fun       ")); 		    // 3
console.log(countWords("Cypress is an UI automation tool.    ")); 	// 6 
console.log(countWords("1 2 3 4")); 				                // 4

// Task 6
function factorial(num){                                // Create a function called "factorial" that takes a number as an argument
    let fact = 1;                                       // Create a variable called "fact" and initialize it to 1
    for(let i = num; i > 0; i--){                       // A for loop that starts at the value of the argument and decrements
        fact *= i;                                      // Update factorial by multiplying itself with that value held by 'i'
    }
    return fact;                                        // return "fact"
}

console.log(factorial(5)); 		// 120
console.log(factorial(4));		// 24
console.log(factorial(0));		// 1
console.log(factorial(1));		// 1

// Task 7
function isPalindrome(str){                         // Create a function called "isPalindrome" that takes a string as an argument
    let newStr = str.toLowerCase();                 // Create a new string that is a duplicate of the argument with no capital letters
    newStr = newStr.split('').reverse().join('');   // Split the new string into an array, reverse the array, and put it back together
    return str.toLowerCase() === newStr;            // return whether or not the revresed string and the lowercased argument are the same
}

console.log(isPalindrome("Hello")); 		// false
console.log(isPalindrome("Kayak")); 		// true 
console.log(isPalindrome("civic")); 		// true
console.log(isPalindrome("abba")); 		    // true
console.log(isPalindrome("ab  a")); 		// false
console.log(isPalindrome("123454321")); 	// true
console.log(isPalindrome("A")); 		    // true
console.log(isPalindrome("")); 		        // true

// Task 8
function countMultipleWords(arr){           // Create a function called "countMultipleWords" that takes an array as an argument
    let counter = 0;                        // Create a counter variable and initialize it to 0
    for(let i = 0; i < arr.length; i++){    // Standard i-loop
        let str = arr[i].trim();            // Initialize a string with the value at the current element of the array, trimmed of excess whitespace
        let newArr = str.split(' ');        // Split the new string into an array by whitespace
        if(newArr.length > 1) counter++;    // If the new array has more than 1 element, increment the counter
    }
    return counter;                         // return counter
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 		    // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); 		    // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 	// 4
console.log(countMultipleWords([ ])); 					                                // 0

// Task 9
function count3OrLess(str){                     // Create a function called "count3OrLess" that takes an array as an argument
    let lessThanFour = 0;                       // Create a variable called "lessThanFour" and initialize it to 0
    let arr = str.split(' ');                   // Split the string into an array via whitespaces (didn't trim as none of the examples required it)
    for(const word of arr){                     // for...of loop to go through the array
        if(word.length < 4 && word.length > 0){ // Check if length of given element is 3 or less (less than 4)
            lessThanFour++;                     // Increment "lessThanFour" (here for readability with comments)
        }
    }
    return lessThanFour;                        // return "lessThanFour"
}

console.log(count3OrLess("Hello")); 			        // 0
console.log(count3OrLess("Hi John")); 			        // 1
console.log(count3OrLess("JavaScript is fun")); 		// 2
console.log(count3OrLess("My name is John Doe")); 	    // 3
console.log(count3OrLess("")); 			                // 0

// Task 10
function isPrime(num){                                      // Create a function called "isPrime" that takes a number as an argument
    if(num < 2) return false;                               // Check if the number is less than 2; if so return false
    for(let i = 2; i <= num; i++){                          // For loop
        if(num % i === 0 && num !== i) return false;        // Check if number is not prime, if so return false
        else if(num % i === 0 && num === i) return true;    // Check if number is prime, if so return true
    }
}

console.log(isPrime(5)); 		// true
console.log(isPrime(2)); 		// true
console.log(isPrime(29)); 		// true
console.log(isPrime(9));        // false
console.log(isPrime(-5));		// false
console.log(isPrime(0));		// false
console.log(isPrime(1));		// false

// Task 11
function add(arr1, arr2){                                   // Create a function called "add" that takes two arrays as an argument
    let max = Math.max(arr1.length, arr2.length);           // Create a variable called "max" to store the length of the larger array
    const arr3 = [];                                        // Create an empty array called "arr3"
    for(let i = 0; i < max; i++){                           // For loop
        if(!isNaN(arr1[i]) && !isNaN(arr2[i])){             // Check if both arrays have a number at the current index of 'i'
            arr3.push(arr1[i] + arr2[i]);                   // Add the two numbers together and them push them to arr3
        }
        else if(!isNaN(arr1[i]) && isNaN(arr2[i])) arr3.push(arr1[i]); // Check if arr1 is a number and arr2 is not; if so, push arr1[i] to arr3
        else arr3.push(arr2[i]);                            // Else, push arr2[i] to arr3
    }

    return arr3;                                            // return arr3
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 		                    // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); 	        // [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));                         // [0, 0, 0, 0]

// Task 12
function removeExtraSpaces(str){                            // Create a function called "removeExtraSpaces" that takes a string as an argument
    let str1 = str.trim();                                  // Create a new variable called "str1" and assign it the value of str, trimmed
    const arr1 = str1.split(' ');                           // Split "str1" into an array called "arr1"
    const arr2 = [];                                        // Create an empty array called "arr2"
    for(let i = 0; i < arr1.length; i++){                   // For loop
        if(arr1[i] !== '') arr2.push(arr1[i]);              // If the element at arr1[i] is not empty, push it to arr2
    }
    return arr2.join(' ');                                  // return arr2 joined as a string with whitespace seperators
}

console.log(removeExtraSpaces("Hello")); 		                    // "Hello"
console.log(removeExtraSpaces("      Hello    World     ")); 	    // "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun")); 	// "JavaScript is fun”
console.log(removeExtraSpaces("")); 			                    // "" 

// Task 13
function findClosestTo10(arr){                              // Create a function called "findClosestTo10" which takes an array as an argument
    const closest = {                                       // Create an object called closest
        toTen: null,                                        // Create a key called toTen, set to null
        toTenDistance: null                                 // Create a key called toTenDistance, set to null
    };
    for(const num of arr){                                  // for...of loop
        let currentDistance = Math.abs(10 - num);           // Find the absolute value of the current number's distance from 10
        if(num === 10) continue;                            // If the current number is 10, skip to the next iteration
        else if(closest.toTen === null){                    // If the value tied to closest.toTen is null:
            closest.toTen = num;                                // Assign it the current num
            closest.toTenDistance = currentDistance;            // Assign its distance from 10
        }
        else if(currentDistance < closest.toTenDistance){   // If the current num is closer than a previous num:
            closest.toTen = num;                                // Reassign the closest num here
            closest.toTenDistance = currentDistance;            // Reassign the distance here
        }
    }
    return closest.toTen;                                   // return closest.toTen
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); 	    // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); 	    // 8
console.log(findClosestTo10([0, -1, -2])); 		                // 0

// Task 14
function isEmailValid(str){                                     // Create a function called "isEmailValid" which takes a string as an argument
    if(str.includes(' ') ||                                     // If the string includes a whitespace, (next line)
    !str.includes('@') ||                                       // Or doesn't include the symbol '@', (next line)
    !str.includes('.')) return false;                           // Or doesn't inluce a dot, return false

    let atCounter = 0;                                          // Create a variable called "atCounter" and set it to 0
    for(const char of str){                                     // for...of loop
        if(char === '@') atCounter++;                           // if the current character is '@', increment atCounter
        if(atCounter > 1) return false;                         // if atCounter is greater than 1, return false
    }

    let beforeAt = str.slice(0, str.indexOf('@'));             // Create a string called "beforeAt" that consists of all characters that come before '@'
    let afterAtBeforeDot = str.slice((str.indexOf('@') + 1), str.indexOf('.')); // Create a string called "afterAtBeforeDot" that consists of the respective characters
    let afterDot = str.slice((str.indexOf('.') + 1));           // Create a string called "afterDot" that consists of all characters after the dot
    if(beforeAt.length >= 2 &&                                  // If the length of "beforeAt" is greater than or equal to 2, and (next line)
        afterAtBeforeDot.length >= 2 &&                         // the length of "afterAtBeforeDot" is greater than or equal to 2, and (next line)
        afterDot.length >= 2) return true;                      // the length of "afterDot" is greater than or equal to 2, return true
    else return false;                                          // else, return false
}

console.log(isEmailValid("")); 			                // false
console.log(isEmailValid("@gmail.com")); 		        // false
console.log(isEmailValid("johndoe@yahoo")); 		    // false
console.log(isEmailValid("johndoe@.com")); 		        // false
console.log(isEmailValid("a@outlook.com")); 		    // false
console.log(isEmailValid("johndoe@a.com")); 		    // false
console.log(isEmailValid("johndoe@@gmail.com")); 	    // false
console.log(isEmailValid("johndoe@gmail.com")); 		// true

// Task 15
function isPasswordValid(str){                          // Create a function called "isPasswordValid" which takes a string as an argument
    if(str.length < 8 || str.length > 16 ||             // If the length of the string is less than 8, or greater than 16 (next line),
        str.includes(' ')) return false;                // Or if the string includes whitespace, return false
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';      // Create a variable called "alphabet" which contains the English alphabet in all caps
    //const specialCharacters = '';                     // commented out incase I still end up needing it
    let digit = 0, specialCharacter = 0;                // Create variables "digit" and "specialCharacter", both set to 0
    let upperCase = 0, lowerCase = 0;                   // Create variables "upperCase" and "lowerCase", both set to 0

    for(const char of str){                             // for...of loop
        if('1234567890'.includes(char)) digit++;                            // If current char is a number, if so increment "digit"
        else if(alphabet.includes(char)) upperCase++;                       // If current char is an uppercase letter, if so increment "upperCase"
        else if(alphabet.toLowerCase().includes(char)) lowerCase++;         // If current char is an lowercase letter, if so increment "lowerCase"
        else /*if(specialCharacters.includes(char))*/ specialCharacter++;   // Else, increment "speicalCharacter"
    }

    if(digit > 0 && specialCharacter > 0 &&             // If password inluces at least 1 digit, speical character (next line),
        upperCase > 0 && lowerCase > 0) return true;    // uppercase letter, and lowercase letter, return true
    else return false;                                  // Else, return false
}

console.log(isPasswordValid("")); 			            // false
console.log(isPasswordValid("abcd")); 			        // false
console.log(isPasswordValid("abcd1234")); 		        // false
console.log(isPasswordValid("Abcd1234")); 		        // false
console.log(isPasswordValid("Chicago12345US!#$%")); 	// false
console.log(isPasswordValid("Abcd1234$")); 		        // true
console.log(isPasswordValid("Chicago123$")); 		    // true
console.log(isPasswordValid("Test1234#")); 		        // true