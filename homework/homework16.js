// Task 1
/*
Write a function named toInitials() which takes a string argument considered to be full name and returns initials of
the given full name.

NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
*/
const toInitials = (str) => str.split(' ').map(element => `${element[0]}.`).join(' ');
    // Code above splits argument by space, maps the first letter of each element with a period concatenated onto the
        // end, and then join them by spaces
console.log('\n\nTask 1:')
console.log(toInitials( "Joe Doe")); 	    // "J. D."
console.log(toInitials( "Alex Reyes")); 	// "A. R."
console.log(toInitials( "Tom Cruise")); 	// "T. C."
console.log(toInitials( "Bruce Willis")); 	// "B. W."
console.log(toInitials( "Ja Le")); 	        // "J. L."

// Task 2
/*
Write a function named hasNumbers() which takes a string argument and returns true if there is a number and false if
there isn’t. 
*/
const hasNumbers = (str) => {
    const numbers = '1234567890';           // Variable 'numbers' is a string consisting of all 10 base numerical characters
    const array = str.split('');            // Variable 'array' is an array devised of the argument split by nothing
   for(const each of array){                // Iterate through 'each' component of the array (tried forEach here, couldn't get it to work for some reason)
    if(numbers.includes(each)) return true; // If 'numbers' includes the current character, return true
   }
   return false;                            // If the code reaches this point, return false
}

console.log('\n\nTask 2:')
console.log(hasNumbers("")); 		                // false
console.log(hasNumbers("John is 34 years old")); 	// true
console.log(hasNumbers("Hello 3")); 		        // true
console.log(hasNumbers("125$")); 		            // true
console.log(hasNumbers("   a   ")); 		        // false
console.log(hasNumbers("      ")); 		            // false
console.log(hasNumbers("!@#$%^&*()_+")); 	        // false


// Task 3
/*
Write a function named elementLength() which takes an array argument and returns the length of each element as a
separate array.
*/
const elementLength = (arr) => arr.map(element => element.length);
    // Above code creates a new array using map, and maps the lenght of each element in the argument array to the new array
console.log('\n\nTask 3:')
console.log(elementLength( [ "Hello", "World" ] )); 			                // [ 5, 5 ]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )); 	        // [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] )); 		            // [ 3, 8, 4 ]
console.log(elementLength( [ ] )); 				                                // [ ]
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )); 	// [ 10, 0, 6, 10 ]


// Task 4
/*
Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates if the sum of its elements
is even or odd.
Note: If the array is empty return even.
*/
const isArraySumEvenOrOdd = (arrNums) => {
    const sum = arrNums.reduce((counter, current) => counter += current, 0);    // Initialize a 'sum' using reduce on the argument
    if(sum % 2 === 0) return 'even';                                            // Check if sum is odd or even, return 'even' if even
    else return 'odd';                                                          // Return 'odd' if odd
}

console.log('\n\nTask 4:')
console.log(isArraySumEvenOrOdd( [ ] ));                // "even"
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ));        // "even"
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ));       //  "odd”
console.log(isArraySumEvenOrOdd( [ 0,0 ] ));            //  "even"
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] ));      //  "odd”

// Task 5
/*
Write a function named reverse() which takes a string argument and returns the given string reversed. 
*/
const reverse = (str) => {
    const backWards = [];           // Initialize empty array 'backWards'
    for(const char of str){         // for-each loop to go through argument
        backWards.unshift(char);    // Add the current character to the front of 'backWards'
    }

    return backWards.join('');      // Return backwards, joined by nothing
}

console.log('\n\nTask 5:')
console.log(reverse("Hello World")); 		// "dlroW olleH"
console.log(reverse("TechGlobal")); 		// "labolGhceT"
console.log(reverse("Basketball is fun")); 	// "nuf si llabteksaB"
console.log(reverse("")); 			        // ""
console.log(reverse("Apples 456")); 		// "654 selppA"

// Task 6
/*
Write a function named reverseWords() which takes a string argument and returns a string with each word within that
string reversed but still in the same order as the initial string. 
*/
const reverseWords = (str) => {
    const unflippedWords = str.split(' ');      // Initialize 'unflippedWords' array by splitting argument by whitespaces
    const flippedWords = unflippedWords.map(word => word.split('').reverse().join(''));
        // Above line maps each word to new array 'flippedWords' with each word being reversed
    return flippedWords.join(' ');              // return 'flippedWords' joined by whitespaces
}

console.log('\n\nTask 6:')
console.log(reverseWords("Hello World")); 	        // "olleH dlroW"
console.log(reverseWords("TechGlobal")); 	        // "labolGhceT"
console.log(reverseWords("Basketball is fun")); 	// "llabteksaB si nuf"
console.log(reverseWords("")); 		                // "”
console.log(reverseWords("Apples 456")); 	        // "selppA 654"