/*
Game Club

People who has a name starting with J can be part of this Game Club

John -> 'You can join the club'
Alex -> 'SORRY! You are out'
*/

function startsWithJ(name){
    if(name.toUpperCase()[0] === 'J'){
        console.log('You can join the club');
    }
    else{
        console.log('SORRY! You are out');
    }
}

startsWithJ('John');
startsWithJ('Alex');

// Shorten if/else
function startsWithJ(name){
    if(name.toUpperCase()[0] === 'J') console.log('You can join the club');
    else console.log('SORRY! You are out');
}

// Convert above if else to Ternary
let name1 = 'john';
let result = name1.toUpperCase()[0] === 'J' ? 'You can join the club' : 'SORRY! You are out';
console.log(result);    // Can also console log after the question mark

// Without storing in a variable
console.log(name1.toUpperCase()[0] === 'J' ? 'You can join the club' : 'SORRY! You are out');

/*
Naming a baby

boy = Sam
girl = Julie

Girl = F
Boy = M
*/
let gender = 'M';

let babyName = gender === 'F' ? 'Julie' : 'Sam';
console.log(babyName);
// Different ways
gender === 'F' ? console.log('Julie') : console.log('Sam');

if(gender === 'F') console.log('Julie');
else console.log('Sam');

console.log(gender === 'F' ? 'Julie' : 'Sam');

// Ternary instead of ladder statements
/*
Assume you are given a number and will print
POSITIVE if the number is greater than zero
NEGATIVE if the number is less than zero
ZERO if the number is zero
*/

let num = Math.floor(Math.random() * 11) - 5;   // This returns a random number between -5 and 5

console.log(`The random number is = ${num}.`);

if(num > 0) console.log('POSITIVE');
else if(num < 0) console.log('NEGATIVE');
else console.log('ZERO');

num > 0 ? console.log('POSITIVE') : num < 0 ? console.log('NEGATIVE') : console.log('ZERO');

let result_pnz = num > 0 ? 'POSITIVE' : num < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result_pnz);