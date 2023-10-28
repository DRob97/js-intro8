/*
Question 1

Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

----
Test data 1:
34

Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

----
Test data 2:
76

Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
const num = 76
if(num < 51) console.log(`${num} is in the 1st half`);
else console.log(`${num} is in the 2nd half`);

if(num < 26) console.log(`${num} is in the 1st quarter`);
else if(num < 51) console.log(`${num} is in the 2nd quarter`);
else if(num < 76) console.log(`${num} is in the 3rd quarter`);
else console.log(`${num} is in the 4th quarter`);

/*
num < 51 ? console.log(`${num} is in the 1st half`) : console.log(`${num} is in the 2nd half`);
num < 26 ? console.log(`${num} is in the 1st quarter`) : num < 51 ? console.log(`${num} is in the 2nd quarter`) : num < 76 ? console.log(`${num} is in the 3rd quarter`) : console.log(`${num} is in the 4th quarter`);
*/

switch(true){
    case num < 51:
        console.log(`${num} is in the 1st half`);
        break;
    default:
        console.log(`${num} is in the 2nd half`);
}
switch(true){
    case num < 26:
        console.log(`${num} is in the 1st quarter`);
        break;
    case num < 51:
        console.log(`${num} is in the 2nd quarter`);
        break;
    case num < 76:
        console.log(`${num} is in the 3rd quarter`);
        break;
    default:
        console.log(`${num} is in the 4th quarter`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 2

Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

----
Test data 1:
0, 1

Expected result 1:
false

----
Test data 2:
0, 0

Expected result 2:
true

----
Test data 3:
1, 0

Expected result 3:
false

---- 
Test data 4:
1, 1

Expected result 4:
true
*/
let num2 = 0, num3 = 0 ;
num2 === num3 ? console.log(true) : console.log(false);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 3

Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

----
Test data 1:
2, 4, 6

Expected result 1:
true

----
Test data 2:
68, 44, 2

Expected result 2:
true

----
Test data 3:
10, 20, 25

Expected result 3:
false

----
Test data 4:
51, 67, 99

Expected result 4:
false
*/

let number = 51;
let number2 = 67;
let number3 = 99;

if (number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0) console.log(true);
else console.log(false);

number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0 ? console.log(true) : console.log(false);

switch (true) {
    case number % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0 :
        console.log(true);
        break;
    default:
        console.log(false);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Question 6

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

// 33 - 47, 58 - 64, 91 - 96, 123 - 126

const string = ' ';
if ((33 <= string.charCodeAt() && string.charCodeAt() <= 47) || (58 <= string.charCodeAt() && string.charCodeAt() <= 64) || (91 <= string.charCodeAt() && string.charCodeAt() <= 96) || (123 <= string.charCodeAt() && string.charCodeAt() <= 126)){
    console.log(`${string} is a special character`);
}
else{
    console.log(`${string} is not a special character`);
}