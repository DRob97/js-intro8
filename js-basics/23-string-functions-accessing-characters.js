// .length property can bee used to get the number of characters in a string
let name = "Alex";      // String length is 4
let name2 = "Alex "     // String length is 5 due to the space; spaces always count towards the lenght of a string
let size = name.length; // 4
console.log(size);      // 4
console.log(typeof size);   // Number

//  How to get specific characters from a string
console.log(name[2]);           
console.log(typeof name[2]);    // String

// Getting the last character from a string, dynamically
let lName = "Smith";
console.log(lName[lName.length - 1]);

// charAt() function can also be used to get a specific character from a string by giving an index as an argument
let city = "Chicago";
console.log(city[2]);           // Returns i
console.log(city.charAt(2));    // Returns i, but with more code

// The difference between [index] and charAt(index)
console.log(city[-5]);           // undefined
console.log(city.charAt(-5));    // empty string, output to the console as ""
console.log(city[100]);           // undefined
console.log(city.charAt(100));    // empty string, output to the console as ""

// charCodeAt() -> returns the ASCII representation of the given character
let country = "CANADA";
console.log(country);
console.log(country.charCodeAt(1));
console.log(country.charCodeAt(0));
console.log(country.charCodeAt(2));

console.log(country.charCodeAt(15));        // NaN
console.log(typeof country.charCodeAt(15)); // number

