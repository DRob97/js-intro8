// Task 1
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);             // If current element is divisible by 7, log it
}

// Task 2
for(let i = 1; i <= 50; i++){
    if(i % 6 === 0) console.log(i);             // If current element is divisible by 2 & 3 (LCM of 6), log it
}

// Task 3
for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i);             // If current element is divisible by 5, log it
}

// Task 4
for(let i = 1; i <= 7; i++){
    console.log(i ** 2);                        // Log the square of the current element
}

// Task 5
let sum = 0;                                    // Create container variable named sum initialized to 0
for(let i = 1; i <= 10; i++){
    sum += i;                                   // Add current value of i to sum
}
console.log(`The sum is ${sum}.`);              // Log sum

// Task 6
const ranNum = Math.ceil(Math.random() * 10);   // Create random number between 1 and 10, both inclusive
let factorial = 1;                              // Create container variable named factorial initialized to 1
/*
// for loop:
for(let i = ranNum; i >= 1; i--){
    factorial *= i;                             // Multiply factorial by current value of i
}
*/

// do-while loop:
let i = ranNum;                                 // Initialize i with value of random number created above
do{
    factorial *= i;                             // Multiply factorial by current value of i
    i--;                                        // Update i
} while(i >= 1);                                // Check condition
console.log(`${ranNum}! = ${factorial}`);      // Log the factorial of the random number

// Task 7
let trackAttempts = 0;                          // Create variable called trackAttepmts initialized to 0
let ranNum1 = 0;                                // Create variable called ranNum1 initialized to 0
do{
    ranNum1 = Math.ceil(Math.random() * 100);   // Assign a random number between 1 and 100 to ranNum1
    trackAttempts++;                            // Update trackAttempts
    
} while(ranNum1 % 5 !== 0);                     // Check condition

console.log(`The random number is ${ranNum1}, and it took ${trackAttempts} attempt(s) to generate it.`);

// Task 8
const countryNames = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countryNames);
console.log(countryNames.sort());               // Log array sorted lexicographically (aplhabetically)

// Task 9
const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));        // Check if array cartoonDogs includes 'Pluto', if true log true, else false

// Task 10
const cartoonCats = ['Azrael', 'Garfield', 'Sylvester', 'Tom'];

console.log(cartoonCats.sort());                    // Log array sorted lexicographically (aplhabetically)
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix')); // Check if array cartoonCats inludes both (next line)
                                                    // 'Garfield' and 'Felix', if true log true, else false
// Task 11
const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);                        // Use for loop to individually log each element of the array
}

// Task 12
const schoolSupplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let bpTracker = 0;                                  // Create variable to track how many strings start with 'b' or 'p', initialzied to 0
let bookOrPen = 0;                                  // Create variable to track how many strings include 'book' or 'pen', initialzied to 0

console.log(schoolSupplies);
for(let i = 0; i < schoolSupplies.length; i++){
    if(schoolSupplies[i][0].toLowerCase() === 'b' || schoolSupplies[i][0].toLowerCase() === 'p'){
        bpTracker++;                                // If string starts with 'b' or 'p', update bpTracker
    }
    if(schoolSupplies[i].toLowerCase().includes('book') || schoolSupplies[i].toLowerCase().includes('pen')){
        bookOrPen++;                                // If string includes 'book' or 'pen', update bookOrPen
    }
}

console.log(bpTracker);                             // Log how many strings started with a 'b' or 'p'
console.log(bookOrPen);                             // Log how many strings included 'book' or 'pen'

// Task 13
const nums = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(nums);
let moreThanTen = 0, lessThanTen = 0, ten = 0;  // Initialize at 0 three variables to keep track of numbers greater than, less than, or equal to 10
for(let i = 0; i < nums.length; i++){
    if(nums[i] > 10) moreThanTen++;             // If current element is greater than ten, update moreThanTen
    else if(nums[i] < 10) lessThanTen++;        // If current element is less than ten, update lessThanTen
    else ten++;                                 // If current element is ten, update ten
}

console.log(moreThanTen );                      // Log the number of elements greater than ten
console.log(lessThanTen);                       // Log the number of elements less than ten
console.log(ten);                               // Log the number of elements that were ten

// Task 14
const arr1 = [5, 8, 13, 1, 2];
const arr2 = [9, 3, 67, 1, 0];

console.log(arr1);
console.log(arr2);

const arr3 = [];                                            // Initialize empty array into which we will push our max values
for(let i = 0; i < arr1.length; i++){
    arr3.push(Math.max(arr1[i], arr2[i]));                  // Find max value at current position in arr1 and arr2, and then push it to arr3
}

console.log(arr3);

// Task 15
function firstDuplicate(arr) {
    let firstDup = -1;                                          // Create default output
    for(let i = 0; i < arr.length; i++){                        // For loop for comparing current element to the following elements
        for(let j = (i + 1); j < arr.length; j++)               // For loop to cycle through following elements, allowing for comparison
            if(arr[j] === arr[i]){                              // If two different elements match, execute following code
                if(firstDup === -1) firstDup = arr[i];          // If default output is still default, update it with current element
            }
    }
    console.log(firstDup);                                      // Log
}


firstDuplicate([ 3, 7, 10, 0, 3, 10 ]);
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]);
firstDuplicate([ 5, '5', 3, 7, 4 ]);
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]);
firstDuplicate([ 1, 2, 3]);
firstDuplicate([ 'foo', 'abc', '123', 'bar']);

// Task 16
function getDuplicates(arr){
let result = [];                                                    // Create container array
for(let i = 0; i < arr.length; i++){                                // For loop for comparing current element to the following elements
    for(let j = (i + 1); j < arr.length; j++){                      // For loop to cycle through following elements, allowing for comparison
        if(arr[j] === arr[i]){                                      // If two different elements match, execute following code
            if(!result.includes(arr[j])) result.push(arr[j]);       // If container does not already include the element, add it to container
            
        }
    }
}
console.log(result);                                                // Log
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]);
getDuplicates([ 1, 2, 5, 0, 7 ]);
getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]);
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]);

// Task 17
function reverseStringWords(str){
    let str1 = str.trim();                                      // Remove whitespaces on both ends of the string
    let arr4 = str1.split();                                    // Convert string to an array
    for(let i = 0; i < arr4.length; i++){
        arr4[i] = arr4[i].split('').reverse().join('');         // Turn each element of the array into its own array, reverse it, (next line)
    }                                                           // then put it back together
    str1 = arr4.join(' ');                                      // Turn array back into a string
    console.log(str1);                                          // Log
}

reverseStringWords("Hello World");
reverseStringWords("I like JavaScript");
reverseStringWords("Hello");
reverseStringWords("");
reverseStringWords("    ");

// Task 18
function getEvens(x, y){
    const max = Math.max(x, y);
    const min = Math.min(x,y);
    const evenArray = [];

    for(let i = min; i <= max; i++){
        if(i % 2 === 0) evenArray.push(i);
    }
    return evenArray;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

// Task 19
function getMultipleOf5(x, y){
    const max = Math.max(x, y);
    const min = Math.min(x,y);
    const fivesArray = [];
    if(x <= y){
        for(let i = min; i <= max; i++){
            if(i % 5 === 0) fivesArray.push(i);
        }
    }
    else{
        for(let i = max; i >= min; i--){
            if(i % 5 === 0) fivesArray.push(i);
        }
    }
    
    return fivesArray;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

// Task 20
function fizzBuzz(x, y){
    const max = Math.max(x, y);
    const min = Math.min(x,y);
    const fbArray = [];
    for(let i = min; i <= max; i++){
        if(i % 3 === 0){
            if(i % 5 === 0) fbArray.push('FizzBuzz');
            else fbArray.push('Fizz')
        }
        else if(i % 5 === 0) fbArray.push('Buzz');
        else fbArray.push(i);
    }

    return fbArray.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));