/*
Task 1
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                 -> "APPLE"
"Java is not a scripting programming language"  	 -> "JavaScript"
"I don't like books" 			                     -> "I like books"
*/

let str1 = 'I like apples and oranges';
let str2 = 'Java is not a scripting programming language';
let str3 = 'I don\'t like books';
console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0, 4) + str2.slice(14, 15).toUpperCase() + str2.slice(15, 20));
console.log(str3.slice(0, 2) + str3.slice(8));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 2
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

    Test Data 1:                                Test Data 2:
let s1 = "JavaScript";                          let s1 = "";

Expected Result 1:                              Expected Result 2:
The length is = 10                              The length is = 0
The first char is = J                           The first char is = undefined
The last char is = t                            The last char is = undefined
true                                            false
*/

let s1 = 'JavaScript';

console.log(`The length is = ${s1.length}`);
console.log(`The first char is = ${s1[0]}`);
console.log(`The last char is = ${s1[s1.length - 1]}`);
console.log(s1.toLowerCase().includes('a') ||
            s1.toLowerCase().includes('e') ||
            s1.toLowerCase().includes('i') ||
            s1.toLowerCase().includes('o') ||
            s1.toLowerCase().includes('u'));

let s2 = '';

console.log(`The length is = ${s2.length}`);
console.log(`The first char is = ${s2[0]}`);
console.log(`The last char is = ${s2[s2.length - 1]}`);
console.log(s2.toLowerCase().includes('a') ||
            s2.toLowerCase().includes('e') ||
            s2.toLowerCase().includes('i') ||
            s2.toLowerCase().includes('o') ||
            s2.toLowerCase().includes('u'));

// The following are two other examples of how to sort through a string for a specific character or characters
let s3 = 'Apple';
let s3ToLower = s3.toLowerCase();
console.log(s3ToLower.includes('a') ||
            s3ToLower.includes('e') ||
            s3ToLower.includes('i') ||
            s3ToLower.includes('o') ||
            s3ToLower.includes('u'));

let name01 = 'Joe';
let name01ToLower = name01.toLowerCase();
console.log(name01ToLower.search('a') !== -1 ||
            name01ToLower.search('e') !== -1 ||
            name01ToLower.search('i') !== -1 ||
            name01ToLower.search('o') !== -1 ||
            name01ToLower.search('u'));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 3
Assume that you are given a String of any odd length. 
Find the middle character for the given String.
*/
let oddLengthString1 = "x";
console.log(oddLengthString1[(oddLengthString1.length - 1) / 2]);               // used .length -1

let oddLengthString2 = "abc";
console.log(oddLengthString2[Math.floor((oddLengthString2.length) / 2)]);       // used Math.floor

let oddLengthString3 = "civic";
console.log(oddLengthString3[(oddLengthString3.length - 1) / 2]);               // using .length - 1 is simpler here
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 4
Assume that you are given a String of any even length.
Find the middle 2 characters for the given String.
*/
let evenLengthString1 = "";
console.log(evenLengthString1.slice(((evenLengthString1.length / 2) - 1), ((evenLengthString1.length / 2) + 1)));

let evenLengthString2 = "abcd";
console.log(evenLengthString2.slice(((evenLengthString2.length / 2) - 1), ((evenLengthString2.length / 2) + 1)));
console.log(evenLengthString2[(evenLengthString2.length / 2) - 1] + evenLengthString2[(evenLengthString2.length / 2)]);
// Above way only works if string is not empty

let evenLengthString3 = "JavaScript";
console.log(evenLengthString3.slice(((evenLengthString3.length / 2) - 1), ((evenLengthString3.length / 2) + 1)));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 5
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters
*/
let sent1 = 'abcd';
let x1 = sent1.slice(0, 2);
let y1 = sent1.slice(-2);
let z1 = sent1.slice(2, (sent1.length - 2));
console.log(`The first two letters are: ${x1}`);
console.log(`The last two letters are: ${y1}`);
console.log(`The rest of the letters are: ${z1}`);

let sent2 = 'JavaScript';
let x2 = sent2.slice(0, 2);
let y2 = sent2.slice(-2);
let z2 = sent2.slice(2, (sent2.length - 2));
console.log(`The first two letters are: ${x2}`);
console.log(`The last two letters are: ${y2}`);
console.log(`The rest of the letters are: ${z2}`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 6
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
*/
function bookEnds(testData){
    //return testData.substring(0, 2) === 'xx' && testData.substring(testData.length - 2) === 'xx'
    // Below line is more accurate
    return testData.startsWith('xx') && testData.endsWith('xx') // Also could have done console.log here and
    // just called the function instead of using return
};
const testData1 = '', testData2 = 'red', testData3 = 'green', testData4 = 'xxbluexx';
console.log(bookEnds(testData1));
console.log(bookEnds(testData2));
console.log(bookEnds(testData3));
console.log(bookEnds(testData4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 7
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:            Test Data 2:           Test Data 3:                 Test Data 4:
let s8 = "";            let s8 = " ";          let s8 = "I like Apple";     let s8 = "JavaScript is nice to learn";

Expected Result 1:      Expected Result 2:     Expected Result 3:           Expected Result 4:
""                      " "                    "Apple like I"               "learn is nice to JavaScript"
*/

function swap(str){
    const x = str.slice(0, str.indexOf(' '))
    const y = str.slice(str.lastIndexOf(' ') + 1)
    const z = str.slice(str.indexOf(' '), (str.lastIndexOf(' ') + 1))
    console.log(y + z + x)
};
swap('');
swap(' ');
swap('I like Apple');
swap('JavaScript is nice to learn');