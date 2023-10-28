/*
Question 7

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:            Test data 2:            Test data 3:            Test data 4:
"a"                     "5"                     "N"                     " "

Expected result 1:      Expected result 2:      Expected result 1:      Expected result 4:
"a"  is a vowel         "INVALID INPUT"         "N"  is not a vowel     "INVALID INPUT"
*/

const letter = 'N';

if(letter.toLowerCase().charCodeAt() === 97 || letter.toLowerCase().charCodeAt() === 101|| letter.toLowerCase().charCodeAt() === 105 || letter.toLowerCase().charCodeAt() === 111 || letter.toLowerCase().charCodeAt() === 117){
    console.log(`${letter} is a vowel`);
}
else if (letter.toLowerCase().charCodeAt() >= 98  && letter.toLowerCase().charCodeAt() <= 122) {
    console.log(`${letter} is not a vowel`);
}
else{
    console.log('INVALID INPUT');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 8

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:            Test data 2:            Test data 3:                Test data 4:
"a"                     "5"                     "$"                         " "

Expected result 1:      Expected result 2:      Expected result 1:          Expected result 4:
"a"  is a letter        "5" is a digit          "$" is a special character  " " is a whitespace
*/
// 65 - 90
const character = ' ';
if(character.toUpperCase().charCodeAt() >= 65 &&  character.toUpperCase().charCodeAt() <= 90){
    console.log(`${character} is a letter`);
}
else if(character.charCodeAt() >= 48 && character.charCodeAt() <= 57){
    console.log(`${character} is a digit`);
}
else if(character === ' '){
    console.log(`${character} is a whitespace`);
}
else{
    console.log(`${character} is a special character`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 9

Requirements:

Write a function that finds the largest of five numbers.

Note: Using simple if-elseif-else conditions

Test data 1:
-5, -2, -6, 0, -1

Expected result 1:
0


Test data 2:
10, 102, 0, -8, -100

Expected result 2:
102
*/

function largestNumber(a, b, c, d, e){
    //console.log(Math.max(a, b, c, d, e));             // Didn't use this because asked for if-else statements
    
    if(a > b && a > c && a > d && a > e){               // Checks if a is largest
        console.log(a);
    }
    else if(b > a && b > c && b > d && b > e){          // Checks if b is largest
        console.log(b);
    }
    else if(c > b && c > a && c > d && c > e){          // Checks if c is largest
        console.log(c);
    }
    else if(d > b && d > c && d > a && d > e){          // Checks if d is largest
        console.log(d);
    }
    else{
        console.log(e);
    }

}
largestNumber(-5, -2, -6, 0, -1);
largestNumber(10, 102, 0, -8, -100);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 10

Requirements:

Write a function to check from two given integers whether one of them is 8 or their sum or difference is 8.

Note: Using simple if-elseif-else conditions

Test data 1:            
7, 8                    

Expected result 1:      
true                    

Test data 2:
16, 8

Expected result 2: 
true


Test data 3:
24, 32

Expected result 3: 
true

Test data 4:
17, 18

Expected result 4: 
False
*/

function checkIf8(x, y){
    if(x === 8 || y === 8){
        return true;
    }
    else if(Math.abs(x + y) === 8 || Math.abs(x - y) === 8){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkIf8(7, 8));
console.log(checkIf8(16, 8));
console.log(checkIf8(24, 32));
console.log(checkIf8(17, 18));