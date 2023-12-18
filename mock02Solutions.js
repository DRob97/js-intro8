function fizzBuzz(x, y){
    let arr = [];
    const min = Math.min(x, y);
    const max = Math.max(x, y);
    
    for(let i = min; i <= max; i++){
    if(i %15 === 0) arr.push('FizzBuzz');
    else if(i % 5 === 0) arr.push('Buzz');
    else if(i %3 === 0) arr.push('Fizz');
    else arr.push(i);
    }

    return arr.join(' | ');
}
//////////////////////////////////////////// First Section Uses Regular Function Notation ////////////////////////////////////////////
/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument
and returns the given word back tripled if the string length is even or doubled if the string length
is odd when invoked.
*/
function doubleOrTripleWord(str){
    if(str.length % 2 === 0) return str.repeat(3);
    else return str.repeat(2);
}

console.log(doubleOrTripleWord("Tech"));    // "TechTechTech"
console.log(doubleOrTripleWord("Apple"));   // "AppleApple”
console.log(doubleOrTripleWord(""));        // ""
console.log(doubleOrTripleWord(" "));       // " "
console.log(doubleOrTripleWord("1"));       // "11"
console.log(doubleOrTripleWord("22"));      // "222222"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.
*/
function firstLastWord(str){
    let trimmedStr = str.trim();
    if(!trimmedStr) return '';
    
    const arr = trimmedStr.split(' ');
    return arr[0] + arr[arr.length - 1];
}

console.log(firstLastWord("Hello World"));          // "HelloWorld"
console.log(firstLastWord("I like JavaScript"));    // "IJavaScript”
console.log(firstLastWord("Hello"));                // "HelloHello"
console.log(firstLastWord(""));                     // ""
console.log(firstLastWord(" "));                    // ""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the
string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
function hasVowel(str){
    const vowels = 'aeiou';
    for(const char of str){
        if(vowels.includes(char.toLowerCase())) return true;
    }
    return false;
}

console.log(hasVowel(""));                  // false
console.log(hasVowel("Javascript"));        // true
console.log(hasVowel("Tech Global"));       // true
console.log(hasVowel("1234"));              // false
console.log(hasVowel("ABC"));               // true
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns
true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/
function startVowel(str){       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let firstLetter = str[0];   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(!str || '1234567890'.includes(firstLetter) || firstLetter === ' ') return false;
    const vowels = 'aeiou';     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(vowels.includes(firstLetter.toLowerCase())) return true;
    return false;               ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

console.log(startVowel("Hello"));       // false
console.log(startVowel("Apple"));       // true
console.log(startVowel("orange"));      // true
console.log(startVowel(""));            // false
console.log(startVowel(" "));           // false
console.log(startVowel("123"));         // false
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will
return average of min and max numbers.
*/
function averageOfEdges(x, y, z){
    const max = Math.max(x, y, z);
    const min = Math.min(x, y, z);

    return (max + min) / 2
}

console.log(averageOfEdges(0, 0, 0));    // 0
console.log(averageOfEdges(0, 0, 6));    // 3
console.log(averageOfEdges(-2, -2, 10)); // 4
console.log(averageOfEdges(-3, 15, -3)); // 6
console.log(averageOfEdges(10, 13, 20)); // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
function replaceFirstLast(str){
    let strTrimmed = str.trim();
    if(strTrimmed.length < 2) return '';

    const firstChar = strTrimmed[0];
    const lastChar = strTrimmed.slice(-1);
    const restOfString = strTrimmed.slice(1, str.length - 1);
    
    return lastChar + restOfString + firstChar;
}

console.log(replaceFirstLast(""));                  // ""
console.log(replaceFirstLast("Hello"));             // "oellH"
console.log(replaceFirstLast("Tech Global"));       // "lech GlobaT"
console.log(replaceFirstLast("A"));                 // ""
console.log(replaceFirstLast(" A "));               // ""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the
string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
*/
function swap4(string){
    if(string.length < 8) return '';

    let first4 = string.slice(0, 4);
    let restOfString = string.slice(4, string.length - 4);
    let last4 = string.slice(-4);
    
    return last4 + restOfString + first4;
}

console.log(swap4("abc"));              // ""
console.log(swap4("JavaScript"));       // "riptScJava"
console.log(swap4("TechGlobal"));       // "obalGlTech"
console.log(swap4(""));                 // ""
console.log(swap4(" "));                // ""
console.log(swap4("Apple"));            // ""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument
and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.
*/
function swapFirstLastWord(str){
    let trimStr = str.trim();
    if(trimStr === '') return '';
    let wordArr = trimStr.split(' ');
    if(wordArr.length < 2) return '';
    const firstWord = wordArr[0];
    const lastWord = wordArr[wordArr.length - 1];
    wordArr[0] = lastWord;
    wordArr[wordArr.length - 1] = firstWord;

    return wordArr.join(' ');
}

console.log(swapFirstLastWord("Hello World"));          // "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));    // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));      // "bar bar foo foo"
console.log(swapFirstLastWord(""));                     // ""
console.log(swapFirstLastWord(" "));                    // ""
console.log(swapFirstLastWord("Hello"));                // ""
console.log(swapFirstLastWord("Hello "));               // ""

//////////////////////////////////////////// Second Section Uses Function Expression Notation ////////////////////////////////////////////
/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and
returns how many elements are positive when invoked.
*/
const countPos = function (arr){
    return arr.reduce((countPositives, curr) => curr > 0 ? countPositives + 1 : countPositives, 0);
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));      // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3]));             // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Find Even Numbers
Write a function named as getEvens() which takes 2 number arguments and returns all the
even numbers as an array stored from smallest even number to greatest even number when
invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/
const getEvens = function(x, y){
    let evenArr = [];
    const min = Math.min(x, y);
    const max = Math.max(x, y);
    for(let i = min; i <= max; i++){
        if(i % 2 === 0) evenArr.push(i);
    }
    return evenArr;
}


console.log(getEvens(2, 7));    // [ 2, 4, 6 ]
console.log(getEvens(17, 5));   // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4));    // [ 4 ]
console.log(getEvens(3, 3));    // [ ]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Find Numbers Divisible By 5
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the
numbers divisible by 5 as an array stored from first found match to last found match when
invoked.

NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/
const getMultipleOf5 = function(x, y){
    let multsOfFive = [];
    if(x > y){
        for(let i = x; i >= y; i--){
            if(i % 5 === 0) multsOfFive.push(i);
        }
    }
    else{
        for(let i = x; i <= y; i++){
            if(i % 5 === 0) multsOfFive.push(i);
        }
    }
    return multsOfFive;
}

console.log(getMultipleOf5(3, 17));     // [ 5, 10, 15]
console.log(getMultipleOf5(23, 5));     // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5));      // [ 5 ]
console.log(getMultipleOf5(2, 4));      // [ ]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and
returns how many elements are negative when invoked.
*/
const countNeg = function(arr){
    return arr.reduce((countNegatives, curr) => curr < 0 ? countNegatives + 1 : countNegatives, 0);
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));      // 1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); // 2
console.log(countNeg([0, -1, -2, -3]));             // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count A
Write a function named countA() which takes a string argument and returns how many A or a
there are in the given string when invoked.

NOTE: Ignore case sensitivity.
*/
const countA = function(str){
    return str.toLowerCase().split('').reduce((countA_s, curr) => curr === 'a' ? countA_s + 1 : countA_s, 0);
}

console.log(countA("TechGlobal is a QA bootcamp"));     // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress"));                         // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count Words
Write a function named countWords() which takes a string argument and returns the total
count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
*/
const countWords = function(str){
    return str.trim().split(' ').length;
}

console.log(countWords(" Javascript is fun "));                 // 3
console.log(countWords("Cypress is an UI automation tool. "));  // 6
console.log(countWords("1 2 3 4"));                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Factorial
Write a function named as factorial() which takes a number as an argument and returns the
factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
*/
const factorial = function(num){
    let fact = 1;
    for(let i = num; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
