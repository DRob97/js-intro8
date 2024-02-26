// Task 1
/*
Write a function named toCamelCase() which takes a string as its argument and returns a new string in camelCase. Assume
the string only contains letters and spaces.
*/
const toCamelCase = (str) => {
    const trimmedArray = str.trim().split(' ');                         // Trim passed argument, and split it by spaces
    if(trimmedArray.length === 1) return trimmedArray.join('');         // Check if newly created array has length of 1, if so return it joined by nothing

    const philtered = trimmedArray.filter(element => element !== ' ');  // Filter out any spaces from our array
    const filtered = philtered.filter(element => element !== '');       // Filter out any '' from our array
    const camelCaseArray = [];                                          // Initialize an empty array we will use to store our end results

    filtered.forEach((element, index) => {                              // Foreach our filtered array
        let placeholder;                                                // Declare a placholder variable
        if(index === 0){                                                // Check current element's index
            placeholder = element.toLowerCase();                        // Assign value to placeholder variable
        }
        else {
            let placeholder2;                                           // Delcare a second placeholder variable
            const placeholderArray1 = element.toLowerCase().split('');  // Initialize a placholder array with our element, changed to lowercase and split
            const placeholderArray2 = [];                               // Initialize a second placeholder array
            placeholderArray1.forEach((element, index) => {             // Foreach our first placeholder array
                if(index === 0){                                        // Check current element's index
                    placeholder2 = element.toUpperCase();               // Assign value to second placeholder variable
                }
                else placeholder2 = element;                            // Assign value to second placeholder variable
                placeholderArray2.push(placeholder2);                   // Push second placeholder variable to second placeholder array
            })
            placeholder = placeholderArray2.join('');                   // Assign value to first placeholder variable
        }
        camelCaseArray.push(placeholder);                               // Push first placeholder variable to camelCaseArray
    });
    return camelCaseArray.join('');                                     // Return camelCaseArray, joined by nothing
}

console.log('\nTask 01');
console.log(toCamelCase("first name")); 	        // "firstName"
console.log(toCamelCase("last     name")); 	        // "lastName"
console.log(toCamelCase("   ZIP CODE")); 	        // "zipCode"
console.log(toCamelCase("I Learn Java Script"));  	// "iLearnJavaScript"
console.log(toCamelCase("helloWorld"));	            // "helloWorld"

// Task 2
/*
Write a function named toSnakeCase() which takes a string as its argument and returns a new string in snake_case. Assume
the string only contains letters and spaces.

NOTE: In snake case words are separated by underscores (_) and are all lowercase.
*/
const toSnakeCase = (str) => {
    const initialArray = str.toLowerCase().trim().split(' ');           // Transform our argument to lowercase, trim it and split it by spaces
    if(initialArray.length === 1) return initialArray.join('');         // Check to see if the resulting array has a length of 1, if so return it joined by nothing

    const philtered = initialArray.filter(element => element !== ' ');  // Filter out any spaces from our array
    const filtered = philtered.filter(element => element !== '');       // Filter out any '' from our array

    return filtered.join('_');                                          // Return our filtered array, joined with underscores
}

console.log('\nTask 02');
console.log(toSnakeCase("first name")); 	        // "first_name"
console.log(toSnakeCase("last    name")); 	        // "last_name"
console.log(toSnakeCase("    I love Java Script")); // "i_love_java_script"
console.log(toSnakeCase("already_snake_case"));     // "already_snake_case"
console.log(toSnakeCase("hello"));  		        // "hello"

// Task 3
/*
Write a function named alternatingCases() which takes a string argument and returns the string with alternating capitalization.

NOTE: The first letter should always be uppercase and non-letter characters are ignored.
*/
const alternatingCases = (str) => {
    let nonLetters = 0;                                 // Initialize counter variable 'nonLetters' with value 0
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';      // Create a variable to represent the alphabet in lowercase
    const array = str.split('');                        // Split argument by nothing

    array.forEach((element, index) => {                 // Foreach our new array
        if(alphabet.includes(element.toLowerCase())){   // Check to see if the alphabet includes our element
            if((index - nonLetters) % 2 === 0){         // Check that the letter's index minus the count of nonLetters is divisible by two
                array[index] = element.toUpperCase();   // If so, change it to uppercase
            }
            else array[index] = element.toLowerCase();  // If not, change it to lowercase
        }
        else nonLetters ++;                             // If element wasn't a letter, update count of nonLetters
    })
    return array.join('');                              // Return our array, joined by nothing
}

console.log('\nTask 03');
console.log(alternatingCases("Hello")); 	    // "HeLlO"
console.log(alternatingCases("basketball")); 	// "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); 	// "TeCh GlObAl"
console.log(alternatingCases("")); 		        // ""
console.log(alternatingCases("123!@#aB")); 	    // "123!@#Ab"

// Task 4
/*
Write a function named isNeutral() that takes two strings comprised of + and -, and return a new string which shows how
the two strings interact in the following way:
    When positives and positives interact, they remain positive.
    When negatives and negatives interact, they remain negative.
    But when negatives and positives interact, they become neutral, and are shown as the number 0.

Note: The two strings will be the same length.
*/
const isNeutral = (str1, str2) => {
    const arr1 = str1.split('');                        // Split our first argument into an array 'arr1'
    const arr2 = str2.split('');                        // Split our second argument in to an array 'arr2'
    const arr3 = [], arr4 = [];                         // Initialize two additional empty arrays 'arr3', and 'arr4'

    for(let i = 0; i < arr1.length; i++){               // Traditional i-loop
        arr3.push([arr1[i], arr2[i]]);                  // Push the elements which share indices from 'arr1' and 'arr2' to 'arr3' as their own mini array
    }

    arr3.forEach((element) => {                         // Foreach 'arr3'
        if(element[0] === element[1]){                  // Check if both elements of the mini array at the current index of 'arr3' match
            if(element[0] === '+') arr4.push('+');      // If so, check they are positive and if so, push '+' to 'arr4'
            else arr4.push('-');                        // If not positive, push '-' to 'arr4'
        }
        else arr4.push('0');                            // If not a matching pair, push '0' to 'arr4'
    })

    return arr4.join('');                               // return 'arr4' joined by nothing
}

console.log('\nTask 04');
console.log(isNeutral("-", "+"));   		    // "0"
console.log(isNeutral("-+", "-+")); 		    //  "-+"
console.log(isNeutral("-++-", "-+-+"));      	// "-+00"
console.log(isNeutral("--++--", "++--++"));   	// "000000"
console.log(isNeutral("+++", "+++"));     	    // "+++"

// Task 5
/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words separated by space. Looking at
the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether
it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if
there are more (or equal) positive words than negative words, false otherwise.

NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
*/
const isTrueOrFalse = (str) => {
    const positiveAplha = 'abcdefghijklm';                                      // Initialize 'positiveAlpha' to represent the 1st half of the alphabet
    const negativeAlpha = 'nopqrstuvwxyz';                                      // Initialize 'negativeAlpha' to represent the 2nd half of the alphabet
    let posWords = 0, negWords = 0;                                             // Initialize counters 'posWords' and 'negWords', both set to 0
    const sentence = str.split(' ');                                            // Split our string into an array called 'sentence'

    sentence.forEach(word => {                                                  // Foreach 'sentence'
        if(positiveAplha.includes(word[0].toLowerCase())) posWords++;           // Check if the first letter of each word is the 1st half of the alphabet, update counter accordingly
        else if(negativeAlpha.includes(word[0].toLowerCase())) negWords++;      // Check if the first letter of each word is the 2nd half of the alphabet, update counter accordingly
    })

    if((posWords - negWords) >= 0) return true;     // If there were more "Positive" words than "Negative" words (or an equal amount) return true
    else return false;                              // Otherwise return false
}

console.log('\nTask 05');
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); 	// true
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));  		// false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); 	    // true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); 	// true
console.log(isTrueOrFalse("Got stuck in the Traffic")); 		    // false