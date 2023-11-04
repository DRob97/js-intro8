/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

console.log(arr1);
console.log(arr2);

const arr3 = [];

for(let i = 0; i < arr1.length; i++){
    arr3.push(arr1[i] * arr2[i]);
}

console.log(arr3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Please find the first even number from the following array
const nums = [-1, 1, 3, 0, 2, 6, 8];
let firstEven = null;
for(const num of nums){
    if(num % 2 === 0){
        if(firstEven === null) firstEven = num;     // Could also use break in the parent if statement instead of nesting like this
        /*
        firstEven = num;
        break;
        */
    }
}

console.log(firstEven);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find the first city name with an odd length
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let oddCity;
for(const city of cities){
    if(city.length % 2 !== 0){
        oddCity = city;
        break;
    }
}

console.log(oddCity);

// Find all the cities which a length greater than five
cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let cities5 = [];
for(const city of cities){
    if(city.length > 5) cities5.push(city);
}

console.log(cities5);