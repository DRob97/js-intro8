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
