// Task 1
/*
Write a function named hasLowerCase() which takes a string argument and returns
true if there is a lowercase letter and false if it there isn’t. 
*/
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
const containsValue = (arr, str) => arr.reduce((result, curr) => curr === str ? result = true : result, false);

console.log(containsValue(["abc", "foo", "javascript"], "hello")); 			        // false
console.log(containsValue(["abc", "def", "123"], "Abc")); 			                // false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); 	// true

// Task 5
/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse
order.​ If there is no enough words reverse, return "There is not enough words!".
*/
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
