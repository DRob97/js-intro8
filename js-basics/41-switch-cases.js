/*
We will print the day based on a random number
We will write a code that generates a random number bt 0 and 6, both inclusive
*/
let day = Math.floor(Math.random() * 7);
if(day === 0) console.log('Sunday');
else if(day === 1) console.log('Monday');
else if(day === 2) console.log('Tuesday');
else if(day === 3) console.log('Wednesday');
else if(day === 4) console.log('Thursday');
else if(day === 5) console.log('Friday');
else console.log('Saturday');

// Switch instead of else
switch(day){    // your variable-value here
    case 0:
    console.log('Sunday');
    break;
    case 1:
    console.log('Monday');
    break;
    case 2:
    console.log('Tuesday');
    break;
    case 3:
    console.log('Wednesday');
    break;
    case 4:
    console.log('Thursday');
    break;
    case 5:
    console.log('Friday');
    break;
    case 6:
    console.log('Saturday');
    break;
    default:    // equivalent to else
    throw new Error(`${day} does not represent any day in a week!!!`);
}

/*
We will print the weekday or weekend based on a number from 0 to 6
*/
let randomDay = Math.floor(Math.random() * 7);
/*
if(randomDay > 0 && randomDay < 6) console.log('Weekday');
else console.log('Weekend');

// Do the same task with Switch
switch(randomDay){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Weekday');
        break;
    default:
        console.log('Weekend');
}
*/
// Even more optimized
switch(randomDay){                  // Default can go anywhere but needs a break afterwards
    case 0:                         // This is, however, not preferred
    case 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

// Best way
switch(true){                  
    case randomDay === 0 || randomDay === 6:
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}

/*
We have an age and are trying to find the demographic
0 - 20 (inclusive)  -> Young
21 - 55 (inclusive) -> Adult
56+                 -> Senior
*/
let age = Math.floor(Math.random() * 100);              // 0 and 99 inclusive
console.log(`The age randomly generate is = ${age}.`);

// if - else if - else ladder solution
if(age < 21) console.log('Young');
else if(age < 56) console.log('Adult');
else console.log('Senior');

// Ternary solution
let result = age < 21 ? 'Young' : age < 56 ? 'Adult' : 'Senior';
console.log(result);

// Switch Solution
switch(true){
    case age < 21:
        console.log('Young');
        break;
    case age < 56:
        console.log('Adult');
        break;
    default:
        console.log('Senior');
}