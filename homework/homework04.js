// Task 1
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);
}

// Task 2
for(let i = 1; i <= 50; i++){
    if(i % 6 === 0) console.log(i);
}

// Task 3
for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i);
}

// Task 4
for(let i = 1; i <= 7; i++){
    console.log(i ** 2);
}

// Task 5
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log(`The sum is ${sum}.`);

// Task 6
const ranNum = Math.ceil(Math.random() * 10);
let factorial = 1;
/*
for(let i = ranNum; i >= 1; i--){
    factorial *= i;
}
*/
let i = ranNum;
do{
    factorial *= i;
    i--;
} while(i >= 1);
console.log(factorial, ranNum);

// Task 7
let trackAttempts = 0;
let ranNum1 = 0;
do{
    ranNum1 = Math.ceil(Math.random() * 100);
    trackAttempts++;
    
} while(ranNum1 % 5 !== 0);

console.log(ranNum1, trackAttempts);

// Task 8
const countryNames = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countryNames);
console.log(countryNames.sort());

// Task 9
const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
if(cartoonDogs.includes('Pluto')) console.log(true);
else console.log(false);

// Task 10
const cartoonCats = ['Azrael', 'Garfield', 'Sylvester', 'Tom'];

console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

// Task 11
const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Task 12
const schoolSupplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let bpTracker = 0;
let bookOrPen = 0;

console.log(schoolSupplies);
for(let i = 0; i < schoolSupplies.length; i++){
    if(schoolSupplies[i][0].toLowerCase() === 'b' || schoolSupplies[i][0].toLowerCase() === 'p'){
        bpTracker++;
    }
    if(schoolSupplies[i].toLowerCase().includes('book') || schoolSupplies[i].toLowerCase().includes('pen')){
        bookOrPen++;
    }
}

console.log(bpTracker);
console.log(bookOrPen);