// Searching in strings
// Searching is essentially the opposite of charAt() and other indexing functions that return the character at an index
// REMEMBER: the first index of a string or array is 0, not 1
// search()
let info = "Tech Global is a Software Training school and Tech Global was founded in 2020.";

console.log(info.search("e"));                              // Doing this will return the position of the first occurence
console.log(info.search("a"));                              // of the substring or character

console.log(info.search("Tech"));                           // Doing this will return the position of the leftmost index of
console.log(info.search("Tech Global"));                    // the first occurence of the substring
console.log(info.search("Software"));

console.log(info.search("software"));                       // This does not exist, and will return -1, representing false
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// indexOf()

let fName = "John Doe";
console.log(fName.indexOf("o"));                            // returns 1
console.log(fName.lastIndexOf("o"));                        // returns 6

console.log(fName.indexOf("John"));                         // returns 0
console.log(fName.indexOf("Doe"));                          // returns 5

console.log(fName.indexOf("John Doe"));                     // returns 0
console.log(fName.indexOf(fName));                          // returns 0

console.log(fName.indexOf(" "));                            // returns 4
console.log(fName.lastIndexOf(" "));                        // returns 4

console.log(fName.indexOf("x"));                            // DNE, returns -1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// includes()
let text = "Today is Saturday and we are practicing String methods";

console.log(text.includes("Saturday"));                     // True
console.log(text.includes("a"));                            // True

console.log(text.includes("JavaScript"));                   // False
console.log(text.includes("Methods"));                      // False
console.log(text.includes(" "));                            // True
console.log(text.includes(""));                             // True, all strings include empty so this will always be true
console.log(text.includes("1"));                             // False
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// startsWith() vs endsWith()
console.log(text.startsWith("T"));                          // True
console.log(text.startsWith("Today"));                      // True
console.log(text.startsWith("Today is Saturday"));          // True
console.log(text.startsWith("Today  is Saturday"));         // False
console.log(text.startsWith(text));                         // True, always true

console.log(text.endsWith("s"));                            // True
console.log(text.endsWith("methods"));                      // True
console.log(text.endsWith("String methods"));               // True
console.log(text.endsWith(text));                           // True, always true

console.log(text.startsWith(""));                           // True
console.log(text.endsWith(""));                             // True