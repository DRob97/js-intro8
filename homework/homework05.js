// Task 1
function countPos(arr){                                 // Create a function called "countPos" that takes an array as an argument
    let pos = 0;                                        // Initialize a tracker variable called "pos" and set it to 0
    for(const x of arr){                                // for...of loop to go through the array
        if(x > 0) pos++;                                // Check if the given element is positive, if so increment "pos"
    }
    return pos;                                         // return "pos"
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));      	// 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 	// 4
console.log(countPos([0, -1, -2, -3])); 		        // 0

// Task 2
function countA(str){                                   // Create a function called "countA" that takes a string as an argument
    let aCounter = 0;                                   // Initialize a tracker variable called "aCounter" and set it to 0
    let two_As = 'Aa';                                  // Create a string called "two_As" consisting of 'A' and 'a'
    for(const letter of str){                           // for...of loop to go through the letters of the string
        if(two_As.includes(letter)) aCounter++;         // Check if current letter is 'A' or 'a'
    }
    return aCounter;                                    // return "aCounter"
}

console.log(countA("TechGlobal is a QA bootcamp"));      	// 4
console.log(countA("QA stands for Quality Assurance")); 	// 5
console.log(countA("Cypress"));                  			// 0

// Task 3