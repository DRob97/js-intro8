// Task 1
/*
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.

Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
*/
const countPalindrome = (str) => {                                  // Arrow function taking a string argument
    if(!str) return 0;                                              // Check to make sure string is not empty

    const pArr = str.split(' ');                                    // Split string into an array (pArr) by whitespace
    const count = [];                                               // Initialize and empty array (count) to store words
    
    for(const word of pArr){                                        // Loop through pArr
        let smallWord = word.toLowerCase();                         // Store lowercase version of word in a variable (smallWord)
        let reversed = smallWord.split('').reverse().join('');      // Reverse the string stored in smallWord and store it in another variable (reversed)

        if(smallWord === reversed) count.push(word);                // Check if reversed smallWord are the same, push to count if true
    }
    return count.length;                                            // Return length of count
}

console.log(countPalindrome("Mom and Dad")); 			                // 2
console.log(countPalindrome("See you at noon")); 			            // 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); 	// 2
console.log(countPalindrome("")); 				                        // 0
console.log(countPalindrome("No palindrome here")); 		            // 0

// Task 2
/*
Write a function named sum() which takes an array of numbers and a boolean value as arguments. It will return the sum
of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
*/
const sum = (arr, boo) => {     // Arrow function taking an array of numbers and a boolean as arguments
    let i, sum = 0;             // Initialize i (undefined), and sum = 0
    if(boo) i = 0;              // Boolean check, assign i = 0
    else i = 1;                 // Boolean check, assign i = 1
    do{                         // Do while loop
        sum += arr[i];          // Update sum with the value at arr[i]
        i += 2;                 // Update i by adding 2
    } while(i < arr.length)     // While the value of i is less than the length of the given array
    return sum;                 // Return sum
}

console.log(sum([1, 5, 10], true)); 		    // 11
console.log(sum([3, 7, 2, 5, 10], false)); 	    // 12
console.log(sum([-1, 1, -2, 2], true)); 		// -3
console.log(sum([0, -1, 15, 1], false)); 		// 0
console.log(sum([1, 2, 3, 4, -4], true)); 		// 0

// Task 3
/*
Write a function named nthChars() which takes a string and a number as arguments and returns the string back with
every nth characters.​
*/
const nthChars = (str, num) => {                        // Arrow function taking a string and a number as arguments
    let letterArray = [];                               // Initalize and empty array (letterArray)

    for(let i = num - 1; i < str.length; i += num){     // I-loop
        letterArray.push(str[i]);                       // Push character at str[i] to letterArray
    }

    return letterArray.join('');                        // Return letterArray, joined by nothing
}

console.log(nthChars("Java", 2)); 		    // "aa"
console.log(nthChars("JavaScript", 5)); 	// "St"
console.log(nthChars("Java", 3)); 		    // "v"
console.log(nthChars("Hi", 4)); 		    // ""
console.log(nthChars("0123456789", 2)); 	// "13579"

// Task 4
/*
Write a function named canFormString() which takes two string arguments and returns true if the second string can be formed
by rearranging the characters of first string. Return false otherwise.

NOTE: This method is case-insensitive and ignore the white spaces.
*/
const canFormString = (str1, str2) => {                                                 // Arrow function, taking two string arguments
    const firstString = str1.toLowerCase().split('').filter(char => char !== ' ');      // Create an array (firstString) by converting str1 to lowercase,
                                                                                            // splitting it by nothing, and filtering out the whitespace
    const secondString = str2.toLowerCase().split('').filter(char => char !== ' ');     // Create an array (secondString) by converting str2 to lowercase,
                                                                                            // splitting it by nothing, and filtering out the whitespace
    const rearranged = [];                                                              // Initilize empty array (rearranged)

    secondString.forEach(char => {                                                      // For each method on secondString
        if(firstString.includes(char)){                                                 // Check if firstString contains current letter of secondString
            rearranged.push(char);                                                      // Push current letter to rearranged
            firstString.splice(firstString.indexOf(char), 1);                           // Remove current letter from firstString, preventing unwanted duplication
        }
        else return false;                                                              // If firstString does not contain current letter of secondString,
    });                                                                                     // return false (prevent from unnecessarily checking further)

    return rearranged.join('') === secondString.join('');                               // Return whether or not rearranged and secondString are the same array
}
console.log(canFormString("Hello", "Hi")); 			            // false
console.log(canFormString("programming", "gaming")); 		    // true
console.log(canFormString("halogen", "hello")); 			    // false
console.log(canFormString("CONVERSATION", "voices rant on")); 	// true
console.log(canFormString("12", "123")); 			            // false

// Task 5
/*
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram.
Return false otherwise.

NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of
strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the
same quantities, regardless of the order of those characters.

NOTE: This method is case-insensitive and ignore the white spaces.
*/
const isAnagram = (str1, str2) => {                                                     // Arrow function which takes two string arguments
    const first = str1.toLowerCase().split('').filter(char => char !== ' ').sort();     // Create new array (first) by converting str1 to lower case,
                                                                            // splitting it by nothing, filtering out the whitespace, and then sorting it
    const second = str2.toLowerCase().split('').filter(char => char !== ' ').sort();    // Create new array (second) by converting str2 to lower case,
                                                                            // splitting it by nothing, filtering out the whitespace, and then sorting it

    return first.join('') === second.join('');                                          // Return whether or not first and second are the same array
}

console.log(isAnagram("Apple", "Peach"));		        // false
console.log(isAnagram("listen", "silent"));	            // true
console.log(isAnagram("astronomer", "moon starer"));	// true
console.log(isAnagram("CINEMA", "iceman"));		        // true
console.log(isAnagram("123", "1234")); 		            // false

// Task 6
/*
Write a function named count() which takes an array of numbers and a boolean value as arguments. It will return the total
count of the even numbers if the boolean value is true. And return the total count of the odd numbers if the boolean value
is false.
*/
const count = (arr, bool) => {                                          // Arrow function which takes an array of numbers and a boolean as arguments
    if(bool) return arr.reduce((total, curr) => curr % 2 === 0 ? total + 1 : total, 0); // If boolean is true, return sum of numbers that are even
    else return arr.reduce((total, curr) => curr % 2 !== 0 ? total + 1 : total, 0);     // If boolean is false, return sum of numbers that are odd
}

console.log(count([1, 5, 10], true)); 		    // 1
console.log(count([3, 7, 2, 5, 10], false)); 	// 3
console.log(count([-1, 1, -2, 2], true)); 		// 2
console.log(count([0, -1, 15, 1], false)); 	    // 3
console.log(count([1, 2, 3, 4, -4], true)); 	// 3

// Task 7
/*
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied
by 2. Return -1 if the given string does not have any digits. Ignore negative numbers.
*/
const sumDigitsDouble = (str) => {                                  // Arrow function which takes a string argument
    let nums = 0;                                                   // Initialize a variable (nums) to 0
    
    for(let i = 0; i < str.length; i++){                            // Standard i-loop
        if(str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48){     // Check if current character is a number via its ASCII value
            nums += parseInt(str[i]);                               // Update nums by adding the current character to it using parseInt
        }
    }

    if(nums === 0) return -1;                                       // If nums is still 0, return -1
    else return nums * 2;                                           // Else, return nums * 2
}

console.log(sumDigitsDouble("Javascript")); 	// -1
console.log(sumDigitsDouble("23abc45"));        // 28
console.log(sumDigitsDouble("Hi-23")); 	        // 10
console.log(sumDigitsDouble("ab12")); 	        // 6
console.log(sumDigitsDouble("n0numh3r3")); 	    // 12

// Task 8
/*
Write a function named countOccurrence() which takes two string arguments and returns how many times that the first string can
form the second string.
*/
const countOccurrence = (str1, str2) => {                                                   // Arrow function taking two strings as arguments
    let firstString = str1.toLowerCase().split('').filter(char => char !== ' ').sort();     // Create new array (firstString) by converting str1 to lower case,
                                                                            // splitting it by nothing, filtering out the whitespace, and then sorting it
    let secondString = str2.toLowerCase().split('').filter(char => char !== ' ').sort();    // Create new array (secondString) by converting str2 to lower case,
                                                                            // splitting it by nothing, filtering out the whitespace, and then sorting it
    const sharedLetters = [];                                                               // Initialize empty array (sharedLetters)

    secondString.forEach((letter) => {                                                      // For each method on secondString
        sharedLetters.push(firstString.reduce((total, curr) => curr === letter ? total + 1 : total, 0));    // Push count of letters in firstString that match
    })                                                                                      // the current letter in secondString

    const duplicateWords = sharedLetters.sort((x, y) => x - y);                             // Sort sharedLetters to get the smallest value in the first element,
                                                                                                // store in new array (duplicateWords)
    return duplicateWords[0];                                                               // Return the first element of duplicate words
}

console.log(countOccurrence("Javascript", "Java")); 	    // 1
console.log(countOccurrence("Hello", "World")); 		    // 0
console.log(countOccurrence("Can I can a can", "anc")); 	// 3
console.log(countOccurrence("Hello", "l"));		            // 2
console.log(countOccurrence("IT conversations", "IT")); 	// 2