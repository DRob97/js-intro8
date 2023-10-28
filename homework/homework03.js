// Task 1
const randNum1 = Math.floor(Math.random() * 100 + 1);
const randNum2 = Math.floor(Math.random() * 100 + 1);
const randNum3 = Math.floor(Math.random() * 100 + 1);
console.log((randNum1 + randNum2 + randNum3) / 3 >= 50);

// Task 2
const randNum4 = Math.floor(Math.random() * 3 + 1);
const randNum5 = Math.floor(Math.random() * 3 + 1);
const randNum6 = Math.floor(Math.random() * 3 + 1);
if(randNum4 === randNum5){
    if(randNum5 === randNum6){
        console.log('TRIPLE MATCH');
    }
    else{
        console.log('DOUBLE MATCH');
    }
}
else if(randNum4 === randNum6 || randNum5 === randNum6){
    console.log('DOUBLE MATCH');
}
else{
    console.log('NO MATCH');
}

// Task 3
function hasA(str){
    console.log(str.toLowerCase().includes('a'));
}
hasA('Tech');       // False
hasA('Global');     // True
hasA('');           // False
hasA('Apple');      // True

// Task 4
function doubleOrTripleWord(str){
    if(str.length % 2 === 0){
        console.log(str.repeat(3));
    }
    else{
        console.log(str.repeat(2));
    }
}

doubleOrTripleWord('Tech');     // Tech x3
doubleOrTripleWord('Apple');    // Apple x2
doubleOrTripleWord('');         // '' x1
doubleOrTripleWord(' ');        // ' ' x2
doubleOrTripleWord('1');        //  1 x2
doubleOrTripleWord('22');       // 22 x3

// Task 5
function firstWord(str){
    if(str.includes(' ')){
    const firstWhiteSpace = str.indexOf(' ');
    console.log(str.slice(0, firstWhiteSpace));
    }
    else
    {
        console.log(str);
    }
}

firstWord('Hello World');           // Hello
firstWord('I like JavaScript');     // I
firstWord('Hello');                 // Hello
firstWord('');                      // ''
firstWord(' ');                     // ''

// Task 6
function lastWord(str){
    if(str.includes(' ')){
    const lastWhiteSpace = str.lastIndexOf(' ');
    console.log(str.slice(lastWhiteSpace + 1));
    }
    else
    {
        console.log(str);
    }
}

lastWord('Hello World');           // World
lastWord('I like JavaScript');     // JavaScript
lastWord('Hello');                 // Hello
lastWord('');                      // ''
lastWord(' ');                     // ''

// Task 7
function firstLastWord(str){
    if(str.includes(' ')){
        const firstWhiteSpace = str.indexOf(' ');
        const lastWhiteSpace = str.lastIndexOf(' ');
        console.log(str.slice(0, firstWhiteSpace) + str.slice(lastWhiteSpace + 1));
        }
        else
        {
            console.log(str + str);
        }
}

firstLastWord('Hello World');           // HelloWorld
firstLastWord('I like JavaScript');     // IJavaScript
firstLastWord('Hello');                 // HelloHello
firstLastWord('');                      // ''
firstLastWord(' ');                     // ''

// Task 8
function startVowel(str){
    const strLowerCase = str.toLowerCase();
    console.log(strLowerCase[0] === 'a' ||
                strLowerCase[0] === 'e' ||
                strLowerCase[0] === 'i' ||
                strLowerCase[0] === 'o' ||
                strLowerCase[0] === 'u');
}

startVowel('Hello');    // False
startVowel('Apple');    // True
startVowel('orange');   // True
startVowel('');         // False
startVowel(' ');        // False
startVowel('123');      // False

// Task 9
function swap4(str){
    if(str.length >= 8){
        const first4 = str.slice(0, 4);
    const last4 = str.slice(-4);
    const theRestOfTheString = str.slice(4, str.length - 4);
    console.log(last4 + theRestOfTheString + first4);
    }
    else{
        console.log('');
    }
}

swap4('abc');
swap4('JavaScript');
swap4('TechGlobal');
swap4('');
swap4(' ');
swap4('Apple');

// Task 10  *****

function swapFirstLastWord(str){
    if(str.includes(' ') && ((str[str.lastIndexOf(' ') + 1]) !== undefined)){
        const firstWord = str.slice(0, str.indexOf(' '));
        const lastWord = str.slice(str.lastIndexOf(' ') + 1)
        const theRestOfTheString = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        console.log(lastWord + theRestOfTheString + firstWord);
    }
    else{
        console.log('');
    }
}

swapFirstLastWord('Hello World');
swapFirstLastWord('I like JavaScript');
swapFirstLastWord('foo bar foo bar');
swapFirstLastWord('');
swapFirstLastWord(' ');
swapFirstLastWord('Hello');
swapFirstLastWord('Hello ');