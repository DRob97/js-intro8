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
//////////////////////////////////////////// Third Section Uses Arrow Function Notation ////////////////////////////////////////////
/*
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and
returns the count of the words that has 3 characters or less when invoked.
*/
const count3OrLess = (str) => {
    if(!str) return 0;
    const strArr = str.split(' ');
    return strArr.reduce((lilWord, curr) => curr.length <= 3 ? lilWord + 1 : lilWord, 0);
}
console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); // 2
console.log(count3OrLess("My name is John Doe")); // 3
console.log(count3OrLess("")); // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument
and returns the string back with all extra spaces removed when invoked.
*/
// const removeExtraSpaces = (str) => str.trim();      // Simple solution given the test cases lack any extra spaces between words
const removeExtraSpaces = (str) => {
    if(!str) return str;
    let trimmed = str.trim();
    const trimArr = trimmed.split(' ');
    const finalArr = trimArr.filter(element => element !== ' ');
    return finalArr.join(' ');
}

console.log(removeExtraSpaces("Hello")); // "Hello"
console.log(removeExtraSpaces(" Hello World ")); // "Hello World"
console.log(removeExtraSpaces(" JavaScript is fun")); // "JavaScript is fun”
console.log(removeExtraSpaces("")); // ""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle
number.
*/
const middleInt = (x, y, z) => {
    const arr = [x, y, z];
    const arrInOrder = arr.sort((a, b) => a - b);
    return arrInOrder[1];
}

console.log(middleInt(1, 2, 2));    // 2
console.log(middleInt(5, 5, 8));    // 5
console.log(middleInt(5, 3, 5));    // 5
console.log(middleInt(1, 1, 1));    // 1
console.log(middleInt(-1, 25, 10)); // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.

NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
*/
const firstDuplicate = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] === arr[i]) return arr[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); // 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); // 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])); // -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); // 'abc'
console.log(firstDuplicate([ 1, 2, 3])); // -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])); // -1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the
duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.
*/
const getDuplicates = (arr) => {
    const duplicateArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] === arr[i] && !duplicateArr.includes(arr[i])) duplicateArr.push(arr[i]);
        }
    }    
    return duplicateArr;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])); // [ 'foo', 'a’ ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])); // [ ]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count Vowels
Write a function named as countVowels() which takes a string word as an argument and
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/
const countVowels = (str) => {
    if(!str) return 0;
    return str.toLowerCase().split('').reduce((vCount, curr) => 'aeiou'.includes(curr) ? vCount + 1 : vCount, 0);
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
before and after words in the given string.
*/
const reverseStringWords = (str) => {
    let strTrimmed = str.trim();
    if(!strTrimmed) return '';
    const strArr = strTrimmed.split(' ');
   for(let i = 0; i < strArr.length; i++){
    let reverseMe = strArr[i];
    let meReversed = reverseMe.split('').reverse().join('');
    strArr[i] = meReversed;
   }
    return strArr.join(' ');
}

console.log(reverseStringWords("Hello World")); // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // "olleH"
console.log(reverseStringWords("")); // ""
console.log(reverseStringWords(" ")); // ""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count Consonants
Write a function named as countConsonants() which takes a string word as an argument and
returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
*/
const countConsonants = (str) => {
    if(!str) return 0;
    const strArr = str.trim().split('');
    return strArr.reduce((consCount, curr) => !'aeiou'.includes(curr) ? consCount + 1 : consCount, 0);
}
console.log(countConsonants("Hello")); // 3
console.log(countConsonants("Hello World")); // 8
console.log(countConsonants("JavaScript is fun")); // 12
console.log(countConsonants("")); // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Count Multiple Words
Write a function named as countMultipleWords() which takes an array as an argument and
returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/
const countMultipleWords = (arr) => {
    return arr.reduce((multWords, curr) => curr.trim().split(' ').length > 1 ? multWords + 1 : multWords, 0);
}

console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])); // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ])); // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])); // 4
console.log(countMultipleWords([ ])); // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive)
and store them in a string from smallest to greatest number with a ' | ' separator for each
number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/
function fizzBuzz(x, y){                    // This does not used arrow function, solved with Tolgonai in practice interview 
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

console.log(fizzBuzz(13, 18)); // "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)); // "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)); // "Buzz"
console.log(fizzBuzz(9, 6)); // "Fizz | 7 | 8 | Fizz"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and
returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
*/
const isPalindrome = (str) => {
    let smolStr = str.trim().toLowerCase();
    let smolBackwards = smolStr.split('').reverse().join('');
    return smolStr === smolBackwards;
}
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if
the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/
const isPrime = (num) => {
    if(num < 2)return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(4)); // true
console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new
array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/
const add = (arr1, arr2) => {       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const sumArr = [];              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let longerArr, shorterArr;      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(arr1.length < arr2.length){  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        longerArr = arr2;           ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        shorterArr = arr1;          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }                               ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    else{                           ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        longerArr = arr1;           ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        shorterArr = arr2;          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }                               ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0; i < shorterArr.length; i++){
        sumArr.push(longerArr[i] + shorterArr[i]);
    }                               ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = shorterArr.length; i < longerArr.length; i++){
        sumArr.push(longerArr[i]);  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }                               ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   return sumArr;                   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a
new array with all elements starting with "A" or "a" replaced with "###".
*/
const noA = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase().startsWith('a')){
            arr[i] = '###';
        }
    }
    return arr;
}

console.log(noA(["javascript", "hello", "123", "xyz"])); // ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // ["###", "###", "###", "###", "###"]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and
will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
*/
console.log(no3and5([7, 4, 11, 23, 17])); // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // [99, 11, 100, 13, 14, 101]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new
array with all 13s replaced with 0s.
*/
console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new
array with all the duplicates removed.
*/
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with
all digits removed from the original string.
*/
console.log(noDigit("")); // ""
console.log(noDigit("Javascript")); // "Javascript"
console.log(noDigit("123Hello")); // "Hello"
console.log(noDigit("123Hello World149")); // "Hello World”
console.log(noDigit("123Tech456Global149")); // "TechGlobal"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
No Vowel
Write a function named noVowel() which takes a string argument and returns a new string
with all vowels removed from the original string.
*/
console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$")); // "125$"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all
digits from the original string.
*/
console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John's age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits("")); // 0
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return
the array with every number replaced with their factorials.
*/
console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []