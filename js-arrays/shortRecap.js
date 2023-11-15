// Array methods recap

const fruits = ['Apple', 'Banana', 'Cherry', 'Kiwi'];

// find index of Cherry
console.log(fruits.findIndex(fruit => fruit === 'Cherry'));

// find last index of Cherry
const fruits2 = ['Apple', 'Banana', 'Cherry', 'Kiwi', 'Cherry'];
console.log(fruits2.lastIndexOf('Cherry'));

// map  - returns new array
const nums = [1, 2, 3]; // Double the array
console.log(nums.map(num => num * 2));

// filter - also returns new array, usually smaller
console.log(nums.filter(num => num > 1));

// reduce - returns one element from an array
console.log([[['Value']]].flat());
console.log([[['Value']]].flat(2));

const num3 = [1, 2, 3]; // sum of elements => 6

let sum = 0;
num3.forEach(num => sum += num);
console.log(sum);

const sum2 = num3.reduce((acc, num) => {
    return acc + num;   // cache
}, 0);

console.log(sum2);