/*
    Write a function call isPositive that takes an argument and returns true if positive, false otherwise
*/

function isPositive(x){
    return x > 0;
}

console.log(isPositive(7));
console.log(isPositive(0));
console.log(isPositive(-23));

/*
    Write a function call isNegative that takes an argument and returns true if negative, false otherwise
*/

function isNegative(y){
    return y < 0;
}

console.log(isNegative(7));
console.log(isNegative(0));
console.log(isNegative(-23));


/*
Writ a function called getFirstChar that takes an argument and returns the first character from the argument
*/

function getFirstChar(str){
    return str[0];
}

console.log(getFirstChar('Hello'));
console.log(getFirstChar('12345'));
console.log(getFirstChar(''));
console.log(getFirstChar(' '));

/*
Write a function called getFirstLastChar that takes and argument and return the first and last
characters of the argument
*/
function getFirstLastChar(str){
    return str[0] + str[str.length - 1];
    // return str.at[0] + str.at[-1];
}

console.log(getFirstLastChar('Hello'));
console.log(getFirstLastChar('12345'));
console.log(getFirstLastChar(''));
console.log(getFirstLastChar(' '));


/*
Write a gunction called average5 that takes 5 arguments and returns their average
*/
function average5(a, b, c, d, e){
    return (a + b + c + d + e) / 5;
}

console.log(average5(1, 2, 3, 4, 5));
console.log(average5(3, 7, 10, 5, 5));