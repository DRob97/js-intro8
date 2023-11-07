const student = {
    fullName: 'John Doe',
    age: 18,
    course: 'Software Engineering'
};

// What are the keys in the student object?
    //fullName, age, and course

// What are the values?
    //'John Doe', 18, and 'Software Engineering'

// What are the key-value pairs?
    // fullName: 'John Doe', age: 18, and course: 'Software Engineering'


// How to get all the keys of an object as an array?
const studentKeys = Object.keys(student);

console.log(studentKeys);                   // [ 'fullName', 'age', 'course' ]

// How to get all the values of an object as an array?
const studentValues = Object.values(student);

console.log(studentValues);                 // [ 'John Doe', 18, 'Software Engineering' ]

// How to get all the key-value pairs (entries) of an object as an array?
const studentEntries = Object.entries(student);

console.log(studentEntries);                // [ [ 'fullName', 'John Doe' ], [ 'age', 18 ], [ 'course', 'Software Engineering' ] ]

/*
Create an object called country with the information

    name: Germany,
    capital: Berlin,
    population: 83000000

    Log all the keys, values, and entries
*/
const country = {
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000
};

const countryKeys = Object.keys(country);
const countryValues = Object.values(country);
const countryEntires = Object.entries(country);

console.log(countryKeys);
console.log(countryValues);
console.log(countryEntires);