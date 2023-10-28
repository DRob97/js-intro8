// Recap

/*
Find if sume of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

const randNum1 = Math.floor(Math.random() * 10 + 1);
const randNum2 = Math.floor(Math.random() * 10 + 1);
const sum = randNum1 + randNum2;
console.log(sum % 2 === 0);

// Can be simplified
console.log(((Math.floor(Math.random() * 10 + 1)) + (Math.floor(Math.random() * 10 + 1))) % 2 === 0);

const string1 = 'odd', string2 = 'even';
function getMiddle(str){
    if(str.length % 2 === 0){
        console.log(str.slice((str.length / 2) - 1, (str.length / 2) + 1));
    }
    else{
        console.log(str[((str.length - 1) / 2)]);
    }
}
getMiddle(string1);
getMiddle(string2);
