// Task 1
/*
Write a function named hasLowerCase() which takes a string argument and returns
true if there is a lowercase letter and false if it there isn’t. 
*/
console.log('<-------Task 1------->');
const hasLowerCase = (str) => {
    const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
    for(const element of str){
        if(lowerAlpha.includes(element)) return true;
    }
    return false;
}

console.log(hasLowerCase("")); 		        // false
console.log(hasLowerCase("JAVASCRIPT")); 	// false
console.log(hasLowerCase("hello")); 		// true
console.log(hasLowerCase("125$")); 		    // false
console.log(hasLowerCase("   a   ")); 		// true

// Task 2
/*
Write a function named noZero() which takes an array of numbers as argument and
returns the array back with all zeros removed.
*/
console.log('<-------Task 2------->');
const noZero = (arr) => arr.filter(x => x !== 0);

console.log(noZero([1]));              // [1]
console.log(noZero([1, 1, 10]));      // [1, 1, 10]​
console.log(noZero([0, 1, 10]));      // [1, 10]
console.log(noZero([0, 0, 0]));       // []
console.log(noZero([10, 100, 0]));    // [10, 100]

// Task 3
/*
Write a function named numberAndSquare() which takes an array of numbers as argument and returns
a multidimensional array with all numbers squared. 
*/
console.log('<-------Task 3------->');
const numberAndSquare = (arr) => arr.map(num => [num, num**2]);

// function numberAndSquare(arr){
//     return arr.map(num => [num, num**2]);
// }
console.log(numberAndSquare([1, 2, 3])); 	// [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); 	// [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); 	    // [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); 	// [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); 	// [[0, 0], [1, 1], [-10, 100]]

// Task 4
/*
Write a function named containsValue() which takes a string array and a string as arguments and returns
a boolean value. Search the string variable inside of the array and return true if it exists in the array.
If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
*/
console.log('<-------Task 4------->');
const containsValue = (arr, str) => arr.reduce((result, curr) => curr === str ? result = true : result, false);

console.log(containsValue(["abc", "foo", "javascript"], "hello")); 			        // false
console.log(containsValue(["abc", "def", "123"], "Abc")); 			                // false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); 	// true

// Task 5
/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse
order.​ If there is no enough words reverse, return "There is not enough words!".
*/
console.log('<-------Task 5------->');
const reverseSentence = function(str){
    const newArr = str.toLowerCase().split(' ');
    if(newArr.length > 1){
        const backwards = newArr.reverse();
        let firstWord = backwards[0];
        firstWord = firstWord.replace(firstWord[0], firstWord[0].toUpperCase());
        backwards[0] = firstWord;
        return backwards.join(' ');
    }
    else return 'There is not enough words!';
}

console.log(reverseSentence("Hello")); 		            // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); 		// "Fun is javascript"
console.log(reverseSentence("This is a sentence")); 	// "Sentence a is this"

// Task 6
/*
Write a function named removeStringSpecialsDigits() which takes a string as argument and return a
string without the special characters or digits.
*/
console.log('<-------Task 6------->');
const removeStringSpecialsDigits = (str) => {
    const arr = [];
    for(const char of str){
    if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90 ||
    char.charCodeAt() >= 97 && char.charCodeAt() <= 122||
    char.charCodeAt() === 32){
        arr.push(char);
    }
    }
    return arr.join('');
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); 	// "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")); 		            // "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); 	        // "Automation"


// Task 7
/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return
back without the special characters or digits.
*/
console.log('<-------Task 7------->');
const removeArraySpecialsDigits = (arr) => {                                // Could maybe join from the start with spaces, push spaces as well, and then split by spaces
    const arr2 = [];
    for(const str of arr){
        const arr3 = [];
        for(const char of str){
            if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90 ||
        char.charCodeAt() >= 97 && char.charCodeAt() <= 122||
        char.charCodeAt() === 32)
        arr3.push(char);
        }
        arr2.push(arr3.join(''));
    }
    return arr2;
}
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); 	// ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); 	        // ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); 	    // ["Automation", "tool"]

// Task 8
/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
*/
console.log('<-------Task 8------->');
const getCommons = (arr1, arr2) => {
    const arr3 = [];
    arr1.filter(element => {
        if(arr2.includes(element) && !arr3.includes(element)) arr3.push(element);
    });
    return arr3;
}

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )); 		        // []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )); 	// ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )); 	        // ["C#"]

// Task 9
/*
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/
console.log('<-------Task 9------->');
const noXInVariables = (arr) => {
    const result = [];
    for(const element of arr){
        if(isNaN(element)) {
            if(element.includes('x') || element.includes('X')){
                let newElement = element.replaceAll('x', '');
                newElement = newElement.replaceAll('X', '');
                if(newElement.length >= 1) result.push(newElement);
                else continue;
            }
            else result.push(element);
        }
        else result.push(element);
    }
    return result;
}

console.log(noXInVariables(["abc", 123, "#$%"])); 		// ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); 		// ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); 	    // [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));	// ["yyy", "ABC"]