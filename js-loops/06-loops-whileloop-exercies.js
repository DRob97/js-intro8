// Generate an even number between 1 and 10 using Math.random()
// Calculate how many attempts it takes to generate it

let ran1;
let attempts = 0;

do{
    ran1 = Math.ceil(Math.random() * 10);
    // console.log(ran1);
    attempts++;
} while(ran1 % 2 !== 0);
console.log(attempts);

// Generate a random number 1 - 10 and calculate how many attempts it takes to generate the number 7

let ran2;
attempts = 0;

do{
    ran2 = Math.ceil(Math.random() * 10);
    // console.log(ran2);
    attempts++;
} while(ran2 % 7 !== 0);
console.log(attempts);

// Same as above example but with infinte for loop with a break
let attemptFor = 0;

for( ; ; ){
    let ran3 = Math.ceil(Math.random() * 10);
    attemptFor++;

    if(ran3 === 7) break;
}

console.log(attemptFor);

// Again same as above but with infinte while loop
attemptFor = 0;
while(true){
    let ran3 = Math.ceil(Math.random() * 10);
    attemptFor++;

    if(ran3 === 7) break;
}
console.log(attemptFor);