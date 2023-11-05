const numbers = [3, 4, 6, 7];

// Multiply each element with 3 -> [9, 12, 18, 21]

const newArr = [];

// for loop
/*
for(let i = 0; i < numbers.length; i++){
    newArr.push(numbers[i] * 3);
}

console.log(newArr);
*/

// for...of
/*
for(const number of numbers){
    newArr.push(number * 3);
}

console.log(newArr);
*/

numbers.forEach(function (num){
    console.log(num * 3);
});

numbers.forEach(x => console.log(x * 3));

const names = ['John', 'Alex', 'Ali'];

// Pring each name
names.forEach(name => console.log(name));
names.forEach(name => console.log(name.toUpperCase()));