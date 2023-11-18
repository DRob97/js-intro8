// Closure
function score(isWin){
    let yourScore = 0;
    // let otherScore = 0;
    function inner(){
        if(isWin) yourScore += 1;
        // else otherScore += 1;
        return yourScore;
    }
    return inner;
}

// The way this is currently set up, every time myVar is invoked the score will increase
const myVar = score(true);      // returns inner function
console.log(myVar);             // [Function: inner]
console.log(myVar());           // 1
console.log(myVar());           // 2
console.log(myVar());           // 3

/*
yourScore is initialized with the value 0
inner function created which increases the score by 1, or not
inner function is returned
*/

let counter = 0;

function increase(){
    return counter += 1;
}

console.log(increase);      // [Function: increase]
console.log(increase());    // 1