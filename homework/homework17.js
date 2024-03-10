// Task 1
/*
Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two
sorted arrays. 

NOTE: The median is the middle number of a sorted array. So the median of [1, 3], [2] would be 2. If the array has an even
length, you are to find the average of the 2 middle numbers
*/
const findMedian = (arr1, arr2) => {
    const doubleArray = (arr1.concat(arr2)).sort();             // Concatenate argument arrays and sort them ascending
    const dubLength = doubleArray.length;                       // Get length of newly created array 'doubleArray'
    if(dubLength % 2 === 0) {                                   // Check if 'dubLength' is even, if so:
        const medIndex1 = doubleArray[(dubLength / 2) - 1];     // Get value in array left of the would-be median index
        const medIndex2 = doubleArray[dubLength / 2];           // Get value in array right of the would-be median index
        return (medIndex1 + medIndex2) /2;                      // Return the average of the above two values
    }
    else return doubleArray[(dubLength - 1) / 2];               // If 'dubLength' is odd return the value at the median index
}

console.log('\nTask 1:');
console.log(findMedian([1, 3], [2])); 		    // 2
console.log(findMedian([1, 2], [3, 4])); 		// 2.5
console.log(findMedian([4], [3])); 		        // 3.5
console.log(findMedian([4], [])); 		        // 4
console.log(findMedian([0], [0,1]));            // 0

// Task 2
/*
Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.

Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that
integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is
defined as equal to 1.
*/
const calculateFactorial = (num) => {
    let product = 1;                    // Set a "counter" variable, 'product', to be returned at the end

    for(let i = num; i >= 2; i--){      // i-loop
        product *= i;                   // Update 'product' by multiplying it with i
    }

    return product;                     // Return 'product'
}

console.log('\nTask 2:');
console.log(calculateFactorial(0)); 	// 1
console.log(calculateFactorial(1)); 	// 1
console.log(calculateFactorial(5)); 	// 120
console.log(calculateFactorial(6)); 	// 720
console.log(calculateFactorial(10)); 	// 3628800
console.log(calculateFactorial(4)); 	// 24

// Task 3
/*
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of
the two numbers.

NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a
remainder. In other words, it is the largest number that is a common factor of two or more numbers.
*/
const calculateGCD = (x, y) => {
    const min = Math.min(x, y);                     // Find minimum value between the two arguments
    const max = Math.max(x, y);                     // Find maximum value between the two arguments
    if(min === 0) return max;                       // Return the larger number if the smaller is 0

    for(let i = min; i >= 1; i--){                  // i-loop
        if(x % i === 0 && y % i === 0) return i;    // If both arguments are evenly divisible by i, return i
    }
}

console.log('\nTask 3:');
console.log(calculateGCD(8, 12)); 	// 4
console.log(calculateGCD(17, 5)); 	// 1
console.log(calculateGCD(48, 18)); 	// 6
console.log(calculateGCD(0, 5)); 	// 5
console.log(calculateGCD(21, 14)); 	// 7
console.log(calculateGCD(60, 48)); 	// 12


// Task 4
/*
Write a function named calculateLCM() which takes two numbers as arguments and returns the least common multiple of the
two numbers.

NOTE: LCM is a mathematical concept used to describe the largest number that divides two or more integers without leaving
a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
*/
const calculateLCM = (x, y) => {
    const min = Math.min(x, y);                     // Find minimum value between the two arguments
    if(min === 0) return min;                       // Return the minimum value if it is 0

    for(let i = 1; i <= (x * y); i++){              // i-loop
        if(i % x === 0 && i % y === 0) return i;    // If both arguments are evenly divisible by i, return i
    }
}

console.log('\nTask 4:');
console.log(calculateLCM(8, 12)); 	// 24
console.log(calculateLCM(17, 5)); 	// 85
console.log(calculateLCM(48, 18)); 	// 144
console.log(calculateLCM(0, 5)); 	// 0
console.log(calculateLCM(21, 14)); 	// 42
console.log(calculateLCM(60, 48)); 	// 240