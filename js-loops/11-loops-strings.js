// Count the number of vowels in below string
// My solution
const school = 'TechGlobal';
let numVowels = 0;

for(let i = 0; i < school.length; i++){
    if(
    school[i].toLowerCase() === 'a' ||
    school[i].toLowerCase() === 'e' ||
    school[i].toLowerCase() === 'i' ||
    school[i].toLowerCase() === 'o' ||
    school[i].toLowerCase() === 'u'
    ){
        numVowels++;
    }
}

console.log(numVowels);

// Akin's soultion
school = 'TechGlobal';
let countV = 0;

for(let i = 0; i < school.length; i++){
    let current = school[i];                        // This line is not needed in this example, but left here because it (next line)
    if('AEIOUaeiou'.includes(current)) countV++;    // would have been useful in my example above
}

console.log(countV);

// With for...of loop
school = 'TechGlobal';
countV = 0;

for(const character of school){
    if('AEIOUaeiou'.indexOf(character) !== -1) countV++;
}

console.log(countV);

// Assume you are given a string; reverse it
// Method 1
let word = 'Hello';
let wordReversed = word.split('').reverse().join('');

console.log(`The reversed '${word}' is '${wordReversed}'`);
// Method 2
word = 'Hello';
let wordArr = [];
for(const character of word){
    wordArr.unshift(character);
}
wordReversed = wordArr.join('');
console.log(`The reversed '${word}' is '${wordReversed}'`);
// Method 3
let word2 = 'Hello';
let wordReversed2 = '';
for(let i = word2.length - 1; i >= 0; i--){
    wordReversed2 += word2[i];
}

console.log(`The reversed '${word2}' is '${wordReversed2}'`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*** ONE OF THE MOST ASKED INTERVIEW QUESTIONS
Assume you are given a string and asked to find if it is a palindrome.
Palindrom means a word or sentence reads the same forward and backward.

civic       -> The 'civic' is PALINDROME!
madam       -> The 'madam' is PALINDROME!
Abba        -> The 'Abba' is PALINDROME!
12321       -> The '12321' is PALINDROME!

abc         -> The 'abc' is NOT PALINDROME!
*/

function isPalindrome(str){
    let word = str.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) console.log(`The ${str} is PALINDROME!`);
    else console.log(`The ${str} is NOT PALINDROME!`);
}

isPalindrome('civic');
isPalindrome('madam');
isPalindrome('Abba');
isPalindrome('12321');
isPalindrome('abc');