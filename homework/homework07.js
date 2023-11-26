// Task 1
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter
and false otherwise.
*/
const hasUpperCase = (str => {
    const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(const letter of str){
        if(upperAlpha.includes(letter)) return true;
    }
    return false;
})

console.log(hasUpperCase("javascript"));    // false
console.log(hasUpperCase("John")); 		    // true
console.log(hasUpperCase("$125.0")); 	    // false
console.log(hasUpperCase("")); 		        // false

//////////
// Task 2
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from
the original string​.
*/
const noDigit = (str => {
    const digits = '1234567890';
    return str.split('').filter(char => !digits.includes(char)).join('');
})

console.log(noDigit("")); 			            // ""
console.log(noDigit("Javascript")); 		    // "Javascript"
console.log(noDigit("123Hello")); 		        // "Hello"
console.log(noDigit("123Hello World149")); 	    // "Hello World”
console.log(noDigit("123Tech456Global149")); 	// "TechGlobal"


//////////
// Task 3
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from
the original string​.
*/
const noVowel = (str => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => !vowels.includes(char)).join('');
})

console.log(noVowel("TechGlobal")); 	// "TchGlbl"
console.log(noVowel("AEOxyz")); 	    // "xyz"
console.log(noVowel("Javascript")); 	// "Jvscrpt"
console.log(noVowel("")); 	            // ""
console.log(noVowel("125$")); 	        // "125$"


//////////
// Task 4
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s
replaced with 0s. ​
*/
const no13 = (arr => {
    return arr.map(element => element !== 13 ? element : 0);
})

console.log(no13([1, 2, 3 ,4])); 		    // [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])); 		        // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); 	// [0, 0, 0, 0, 0]
console.log(no13([])); 			            // []


//////////
// Task 5
/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​
*/
const middleInt = function(x, y, z){
    const nums = [x, y, z];
    nums.sort((a, b) => a - b);
    return nums[1];
}

console.log(middleInt(1, 2, 2)); 	    // 2
console.log(middleInt(5, 5, 8)); 	    // 5
console.log(middleInt(5, 3, 5)); 	    // 5
console.log(middleInt(1, 1, 1)); 	    // 1
console.log(middleInt(-1, 25, 10)); 	// 10


//////////
// Task 6
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
*/
const sumOfDigits = function(str){
    let sum = 0;
    const digits = '1234567890';
    const arr = str.split('').filter(char => digits.includes(char));

    for(const el of arr){
        sum += Number(el);
    }
    return sum;
}

console.log(sumOfDigits("Javascript")); 	    // 0
console.log(sumOfDigits("John\'s age is 29")); 	// 11
console.log(sumOfDigits("$125.0")); 		    // 8
console.log(sumOfDigits("")); 		            // 0


//////////
// Task 7
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every
number replaced with their factorials.
*/

const arrFactorial = function(arr){
    const newArr = [];
    for(const element of arr){
        let product = 1;
        for(let i = element; i >= 1; i--){
            product *= i;
        }
        newArr.push(product);
    }
    return newArr;
}

console.log(arrFactorial([1, 2, 3 ,4])); 		//  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); 		        // [1, 120]
console.log(arrFactorial([5 , 0, 6])); 		    // [120, 1, 720]
console.log(arrFactorial([])); 		            // []


//////////
// Task 8
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at
index of 0, digits at index of 1 and specials at index of 2. 
*/
const categorizeCharacters = function(str){
    let letters = [];
    let digits = [];
    let specials = [];
    for(const char of str){
        if('abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) letters.push(char);
        else if('1234567890'.includes(char)) digits.push(char);
        else specials.push(char);

    }
    return [letters.join(''), digits.join(''), specials.join('')];
}

console.log(categorizeCharacters("1234")); 	        // [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%")); 	// [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); 	// [ 'abc', '123', '$%%' ]