/*
Write a function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
function name is startE.
NOTE: If the given name is empty -> return false
*/
function startE(name){
    if(name.toLowerCase()[0] === 'e') return true;
    else return false;
}

let b1 = startE('Emily');    // True
console.log(b1);
let b2 = startE('emily');    // True
console.log(b2);
let b3 = startE('Alex');     // False
console.log(b3);
let b4 = startE('');         //False
console.log(b4);

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back
*/

function fooBar(num){
    if(num % 5 === 0 && num % 7 === 0){
        return 'foobar';
    }
    else if(num % 5 === 0){
        return 'foo';
    }
    else if(num % 7 === 0){
        return 'bar';
    }
    else{
        return num;
    }
}

console.log(fooBar(2));   // 2
console.log(fooBar(3));   // 3
console.log(fooBar(5));   // 'foo'
console.log(fooBar(10));  // 'foo'
console.log(fooBar(14));  // 'bar'
console.log(fooBar(0));   // 'foobar'
console.log(fooBar(35));  // 'foobar'
console.log(fooBar(70));  // 'foobar'

/*
Write a function called getGrade which takes a number as the score and returns a letter as a grade
0 - 100
90 + = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
score < 59 = F
*/
/*
function getGrade(score){
    if(score >= 90) return 'A';
    else if(score >= 80 && score < 90) return 'B';
    else if(score >= 70 && score < 80) return 'C';
    else if(score >= 60 && score < 70) return 'D';
    else return 'F';
}
*/

function getGrade(score){
    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 60) return 'D';
    else return 'F';
}

console.log(getGrade(90));  // A
console.log(getGrade(89));  // B
console.log(getGrade(80));  // B
console.log(getGrade(79));  // C
console.log(getGrade(70));  // C
console.log(getGrade(69));  // D
console.log(getGrade(60));  // D
console.log(getGrade(59));  // F

console.log(getGrade(95));  // A
console.log(getGrade(83));  // B
console.log(getGrade(23));  // F
console.log(getGrade(67));  // D