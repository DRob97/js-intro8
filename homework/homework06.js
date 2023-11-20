// Task 1
/*
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
*/
function noSpace(str){          // Function called noSpace written in regular function notation which takes a string as an argument
    let str1 = str.trim();      // Initialize a new string variable called str1 with the value of the argument, trimmed
    let arr1 = str1.split(' '); // Initialize a new array called arr1 with its elements provided by splitting str1 by whitespace
    str1 = arr1.join('');       // Reassign str1 with the contents of arr1, joined back together without the whitespaces
    return str1;                // return str1
}

console.log(noSpace(""));                   //  ""
console.log(noSpace("Javascript"));         //  "Javascript"
console.log(noSpace("    Hello   "));       // "Hello"
console.log(noSpace(" Hello World   "));    // "HelloWorld”
console.log(noSpace("Tech Global"));        // "TechGlobal"

// Task 2
/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and
last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
const replaceFirstLast = function(str){         // Function replaceFirstLast which takes a string as an argument, written in Function Expression Syntax
    let str1 = str.trim();                      // Initialize a new string variable called str1 with the value of the argument, trimmed
    let arr1 = str1.split('');                  // Initialize a new array called arr1 with its elements provided by splitting str1 by element
    if(arr1.length < 2) return '';              // If statement to check length of arr1, returning empty string if condition is met
    else{                                       // Else statement
        let placeHolder = arr1[0];              // Initialize a placeHolder variable with the value of the first element of arr1
        arr1[0] = arr1[arr1.length - 1];        // Reassign arr1[0] with the value of the last element in arr1
        arr1[arr1.length - 1] = placeHolder;    // Reassign the last element of arr1 with the value stored in placeHolder (initial arr1[0] value)
        return arr1.join('');                   // Return arr1 joined back together by element
    }
};

console.log(replaceFirstLast("")); 		        //  ""
console.log(replaceFirstLast("Hello")); 		//  "oellH"
console.log(replaceFirstLast("Tech Global")); 	// "lech GlobaT"
console.log(replaceFirstLast("A")); 		    // ""
console.log(replaceFirstLast("    A      ")); 	// ""

// Task 3
/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns
false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
const hasVowel = (str) => {                                         // Function hasVowel that takes a string as an argument, written in Arrow Function Syntax
    for(const element of str){                                      // for...of loop
        if('aeiou'.includes(element.toLowerCase())) return true;    // Check if the element is a vowel, if so return true
    }
    return false;                                                   // If the code reaches this point, it implies the lack of a vowel and returns false
};

console.log(hasVowel("")); 		            // false
console.log(hasVowel("Javascript")); 		// true
console.log(hasVowel("Tech Global")); 		// true
console.log(hasVowel("1234")); 		        // false
console.log(hasVowel("ABC")); 		        // true

// Task 4
/*
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a
message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/
const checkAge = (yearOfBirth) => {                             // Function checkAge which take a number as an argument
    const currentYear = 2023;                                   // Initialize the variable currentYear to 2023
    const age = currentYear - yearOfBirth;                      // Find age, given the difference between the provided birth year and the current year
    if(age >= 16 && age <= 120) return 'AGE IS ALLOWED';        // If age is between 16 and 120 (both inclusive), return 1st message
    else if(age >= 0 && age < 16) return 'AGE IS NOT ALLOWED';  // If age is between 0 and 16 (0 inclusive), return 2nd message
    else return 'AGE IS NOT VALID';                             // If age holds any other value, return 3rd message
};

console.log(checkAge(2015));        // "AGE IS NOT ALLOWED"
console.log(checkAge(2007));        // "AGE IS ALLOWED"
console.log(checkAge(2050));        // "AGE IS NOT VALID"
console.log(checkAge(1920));        // "AGE IS ALLOWED"
console.log(checkAge(1800));        // "AGE IS NOT VALID"

// Task 5
/*
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
*/
const averageOfEdges = function(x, y, z){               // Function called averageOfEdges which takes three numbers as an argument
    /*
    const max = Math.max(x, y, z);
    const min = Math.min(x, y, z);
    const sumMaxMin = max + min;
    averageMaxMin = sumMaxMin / 2;
    return averageMaxMin;
    */
   return (Math.max(x, y, z) + Math.min(x, y, z)) / 2;  // return max value plus min value divided by 2
};

console.log(averageOfEdges(0, 0, 0)); 		// 0
console.log(averageOfEdges(0, 0, 6)); 		// 3
console.log(averageOfEdges(-2, -2, 10)); 	// 4
console.log(averageOfEdges(-3, 15, -3)); 	// 6
console.log(averageOfEdges(10, 13, 20)); 	// 15

// Task 6
/*
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements
starting with "A" or "a" replaced with "###".
*/
function noA(arr){          // Function called noA which takes an array as an argument
    const arr1 = [];        // Initialize arr1 as an empty array
    arr.map(string => string.toUpperCase().startsWith('A') ? arr1.push('###') : arr1.push(string)); // Map the elements of arr into
                            // arr1 with any element starting with 'a' or 'A' replaced with '###'
    return arr1;            // return arr1
}

console.log(noA(["javascript", "hello", "123", "xyz"])); 	//  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); 	//  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); 	// ["###", "###", "###", "###", "###"]

// Task 7
/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with
elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/
const no3and5 = (arr) => {                          // Function called no3and5 which takes an array as an argument
    const newArr = [];                              // Initialize newArr as an empty array
    arr.map(num => {                                // map arr
        if(num % 5 === 0){                          // If num is divisible by 5 *
            if(num % 3 === 0) newArr.push(101);     // If number is divisible by 3 as well, push 101 to newArr
            else newArr.push(99);                   // * push 99 to newArr
        }
        else if(num % 3 === 0) newArr.push(100);    // If number is divisible by 3, push 100 to newArr
        else newArr.push(num);                      // Else, push the element (number) to newArr
    });
    return newArr;                                  // Return newArr
};

console.log(no3and5([7, 4, 11, 23, 17])); 	        // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6]));		            // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); 	// [99, 11, 100, 13, 14, 101]

// Task 8
/*
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of
the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/
function countPrimes(arr){                                          // Function called countPrimes which takes an array as an argument
    let primeCounter = 0;                                           // Initialize a counter to 0
    for(const element of arr){                                      // for...of loop to go through the array
        for(let i = 2; i <= element; i++){                          // i-loop to test all numbers between smallest prime number and element
            if(element % i === 0 && element === i) primeCounter++;  // If element is prime, update counter
            else if(element % i === 0 && element !== i) break;      // If element is not, break out of nested i loop and continue with next element
        }
    }
    return primeCounter;                                            // return the counter
}

console.log(countPrimes([-10, -3, 0, 1])); 	        // 0
console.log(countPrimes([7, 4, 11, 23, 17])); 	    // 4
console.log(countPrimes([41, 53, 19, 47, 67]));     // 5

// Task 9
/*Write a function named removeDuplicates() which takes an array argument and returns a new array with all the
duplicates removed.
*/
function removeDuplicates(arr){
    const noDupes = [];
    for(const arg of arr){
        if(!noDupes.includes(arg)) noDupes.push(arg);
    }
    return noDupes;    
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 		    // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); 			                // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); 			            // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); 	// ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); 		            // ["1", "2", "3"]

// Task 10
/*
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid
or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/
function isDateFormatValid(str){                        // Function called isDateFormatValid which takes a string as an argument
    let str1 = str.trim();                              // Initialize str1 with the provided string, trimmed
    if(str1.includes('/')){                             // Check to see if the provided string contains '/''
        const dateArr = str1.split('/');                // If so, split by '/''
        if(dateArr[0].length === 2 && dateArr[1].length === 2 &&    // Check to make sure the month and day elements use 2 characters
            dateArr[2].length === 4 && dateArr.length === 3 &&  // Check to make sure the year is 4 characters and the dateArr contains only 3 elements
            dateArr[0] <= 12 && dateArr[1] <= 31){      // Make sure the month is 12 or less, and the day 31 or less
                return true;                            // If the string passes the 6 tests listed above, return true
        }
        else return false;                              // else return false
    }
    else return false;                                  // If the provided string dose not include '/', return false
}

console.log(isDateFormatValid(""));      			        // false
console.log(isDateFormatValid("15/30/2020"));        		// false
console.log(isDateFormatValid("10-30-2020 "));       		// false
console.log(isDateFormatValid("10.30.2020"));        		// false
console.log(isDateFormatValid("5/30/2020"));         		// false
console.log(isDateFormatValid("05/30/2020 "));       		// true
console.log(isDateFormatValid("10/2/2020"));         		// false
console.log(isDateFormatValid("10/02/2020 "));       		// true

// Task 11
/*
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/
function secondMax(arr){                        // Function called secondMax which takes an array as an argument
    let max = Math.max(...arr);                 // Initialize max variable with the maximum value found in the array
    let sMax = Math.min(...arr);                // Initialize sMax variable with the minimum value found in the array
    if(arr.length === 1) return arr[0];         // Check array length, if 1, return arr[0]
    else{                                       // else
        for(let i = 0; i < arr.length; i++){    // Standard i-loop
            if(arr[i] > sMax && arr[i] < max) sMax = arr[i];   // If element at arr[i] is greater than the current sMax but less
        }                                                           // the max, update sMax
        return sMax;                            // return sMax
    }
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); 	// 7
console.log(secondMax([3, 4, 5, 6]));		        // 5
console.log(secondMax([10]));		                // 10

// Task 12
/*
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.
*/
function secondMin(arr){                                        // Function called secondMin which takes an array as an argument
    let min = Math.min(...arr);                                 // Initialize min variable with the minimum value found in the array
    let sMin = Math.max(...arr);                                // Initialize sMin variable with the maximum value found in the array
    if(arr.length === 1) return arr[0];                         // Check array length, if 1, return arr[0]
    else{                                                       // else
        for(let i = 0; i < arr.length; i++){                    // Standard i-loop
            if(arr[i] > min && arr[i] < sMin) sMin = arr[i];    // If element at arr[i] is greater than the current min but less
        }                                                           // than the current sMin, update sMin
        return sMin;                                            // return sMin
    }
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); 	// 7
console.log(secondMin([3, 4, 5, 6])); 		        // 4
console.log(secondMin([10])); 		                // 10

// Task 13
/*
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
*/
function mostRepeated(arr){             // Function called mostRepeated which takes an array as an argument
    if(arr.length < 2) return arr[0];   // Check length of arr, if less than 2, return arr[0]
    else{                               // else
        const arrNoDupes = [];          // Initialize empty array called arrNoDupes
        const arrObjects = [];          // Initialize empty array called arrObjects
        const arrObjCounter = [];       // Initialize empty array called arrObjectCounter
        const arrCopy = arr;            // Initialzed arrCopy as a copy of the argument, arr
    
        for(const arg of arrCopy){      // for...of loop to iterate through arrCopy
            if(!arrNoDupes.includes(arg)) arrNoDupes.push(arg); // If arrNoDupes does not contain the current element in arrCopy,
        }                                                           // push it. This creates an array with only unique elements
        for(const arg of arrNoDupes){   // for...of loop to iterate through arrNoDupes
            const element = {           // Create an element object to keep track of the unique values in arrNoDupes
                value: arg,             // Assign the value of the current arg to the key 'value'
                counter: 0              // Assign the key 'counter' the value of 0
            };
            arrObjects.push(element);   // Push this newly created object to arrObjects, creating an array of objects
        }
        for(const obj of arrObjects){   // for...of loop to iterate through the elements of arrObjects
            for(arg of arrCopy){        // Nested for...of loop to once again iterate through the elements of arrCopy
                if(arg === obj.value) obj.counter = obj.counter + 1;  // If the current element of arrCopy shares the same value as the
            }                                   // 'value' key in the current object in the parent loop, increase the object's counter
            arrObjCounter.push(obj.counter);    // Push the value of the current object's counter to arrObjCounter
        }
        const max = Math.max(...arrObjCounter); // Spread the elements of arrObjCounter into Math.max() to find the largest counter value
        for(const obj of arrObjects){           // for...of loop to iterate through arrObjects once more
            if(obj.counter === max) return obj.value;   // If the value attached to the current object's 'counter' key matches the max
        }                                                   // value, return the value attached to the current object's 'value'key
    }
    
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); 			                    // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); 	// "pen"
console.log(mostRepeated([10])); 					                                    // 10
console.log(mostRepeated(["TechGlobal"])); 				                                // "TechGlobal"