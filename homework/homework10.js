// Task 1
/*
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as
key-value pairs and returns the total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is $3.29
1 Mango is $4.99
1 Pineapple is $5.25
*/
const calculateTotalPrice1 = (cart) => {                            // Arrow function which takes an object called cart as an argument
    const produce = {                                               // Produce object used to store each product's price
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };
    let total = 0;                                                  // Total for cart is initialized to 0

    for(const [item, amount] of Object.entries(cart)){              // For...of loop to iterate through cart
        for(const [product, price] of Object.entries(produce)){     // For...of loop to iterate through produce
            if(product === item) total += (price * amount);         // If statement used to update total
        }
    }
    return total;                                                   // Return total
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); 			                // 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); 		    // 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); 		        // 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); // 12.24

// Task 2
/*
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as
key-value pairs and returns the total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is $3.29
1 Mango is $4.99
1 Pineapple is $5.25

Note:
There will be some discounts as below​:

There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.
*/
const calculateTotalPrice2 = (cart) => {                                // Arrow function which takes an object called cart as an argument
    const produce = {                                                   // Produce object used to store each product's price
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };
    let total = 0;                                                      // Total for cart is initialized to 0

    for(const [item, amount] of Object.entries(cart)){                  // For...of loop to iterate through cart
        for(const [product, price] of Object.entries(produce)){         // For...of loop to iterate through produce
            if(product === item && item === 'Apple'){                   // If statement to see if the item is an apple
                for(let i = 1; i <= amount; i++){                       // I-loop used to iterate through the amount of apples in cart
                    if(i % 2 === 0) total += (price / 2);               // Every second apple is half-priced; update total accordingly
                    else total += price;                                // All other apples are full priced; update total accordingly
                }
            }
            else if(product === item && item === 'Mango'){              // Else if statement used to see if the item is a mango
                for(let i = 1; i <= amount; i++){                       // I-loop used to iterate throuh the amount of mangos in cart
                    if(i % 4 === 0) total += 0;                         // Every fourth mango is free; update total accordingly
                    else total += price;                                // All other mangos are full priced; update total accordingly
                }
            }
            else if(product === item) total += (price * amount);        // Else if statement used to make sure total is only updated when
        }                                                                   // item matches product
    }
    return total.toFixed(2);                                            // Return total fixed to 2 decimal points; used toFixed(2) because
}                                                                           // with the last example I kept getting 29.510000000000005

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); 			                // 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); 		        // 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); 		    // 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })); // 29.51

// Task 3
/*
Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string.

Note:
Function should return empty string if the number argument is greater than the count of the words in the given string.
*/
const nthWord = (str, num) => {                         // Arrow funciton which takes a string and a number as arguments
    const strArr = str.split(' ');                      // Array initialized with the given string, split by whitespace
    if(strArr.length >= num) return strArr[num - 1];    // If statement to check if array length is greater than the given number;
                                                            // if so return the element that corresponds with the number
    else return '';                                     // Else, return an empty string
}

console.log(nthWord("I like programming languages", 2)); 	    // "like"
console.log(nthWord("QA stands for Quality Assurance", 4)); 	// "Quality"
console.log(nthWord("Hello World", 3)); 		                // ""
console.log(nthWord("Javascript", 1)); 			                // "Javascript”
console.log(nthWord("", 1)); 			                        // ""

// Task 4
/*
Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong,
return false otherwise.​

Note:
An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.
In other words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is
equal to the number itself.

Let's take an example to understand it better; Consider the number 153:

To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the
number of digits, equals the original number.​
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the
original number, which means 153 is an armstrong number.
*/
const isArmstrong = (num) => {                          // Arrow function which takes a number argument
    const nStr = num.toString();                        // New variable to store the number converted to a string
    const nArr = nStr.split('');                        // New array to store the string-number, split by nothing
    let sum = 0;                                        // Sum, initialized to 0

    for(const number of nArr){                          // For...of loop to iterate through the array
        sum += Number.parseInt(number)**nArr.length;    // Update the sum in an attempt to make an armstrong number
    }
    return sum === num;                                 // Return whether or not the number and sum are a match
}

console.log(isArmstrong(153)); 	    // true
console.log(isArmstrong(123)); 	    // false
console.log(isArmstrong(1634)); 	// true
console.log(isArmstrong(153)); 	    // true
console.log(isArmstrong(1111)); 	// false

// Task 5
/*
Write a function named reverseNumber() which takes a number argument and returns it back reversed without converting it
to a String.

Note:
Do not convert number to string to complete the task.
*/
const reverseNumber = (num) => {                    // Arrow function taking a number argument
    const numReversed = [];                         // Container array
    let reversedNum = 0;                            // Storage for reversed number, functions like a sum

    while(num > 0){                                 // While loop to iterate as long as the number is greater than 0
        numReversed.unshift(num % 10);              // Get the smallest whole digit and put it in the front of the array
        num = Math.floor(num / 10);                 // Divide the number by 10 and floor it, thus changing the smallest whole digit
    }
    for(let i = 0; i < numReversed.length; i++){    // I-loop to iterate through the container array
        reversedNum += (numReversed[i] * 10**i);    // Update the reversed number container
    }
    
    return reversedNum;                             // Return the reversed number
}

console.log(reverseNumber(371)); 	// 173
console.log(reverseNumber(123)); 	// 321
console.log(reverseNumber(12)); 	// 21
console.log(reverseNumber(0)); 	    // 0
console.log(reverseNumber(111)); 	// 111

// Task 6
/*
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. It will return
the array elements doubled if true or tripled if the boolean value is false.​
*/
const doubleOrTriple = (arr, bool) => {        // Arrow function, taking an array and a boolean as arguments
    if(bool){                                  // If statement to check boolean
        return arr.map(num => num * 2);        // Return array with values doubled
    }
    else return arr.map(num => num * 3);       // Else return array with values tripled
}

console.log(doubleOrTriple([1, 5, 10], true)); 	// [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)); 	// [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)); 	// [-2, -4]
console.log(doubleOrTriple([0], false)); 	    // [0]
console.log(doubleOrTriple([-1, 0, 1], true)); 	// [-2, 0, 2]

// Task 7
/*
Write a function named splitString() which takes a string and a number arguments and returns the string back split by
the given number.

Note:
Return empty string if the string is shorter than splitting number or the string length is not divisible by the given number.
*/
const splitString = (str, num) => {                             // Arrow function which takes a number and a string as arguments
    if(num > str.length || str.length % num !== 0) return '';   // General checks to stay within guidelines

    let strArr = str.split('');                                 // Split the string into an array by nothing
    strArr.splice(num, 0, ' ');                                 // Insert a space, corresponding with the given number
    return strArr.join('');                                     // Return the array, with newly added space, joined by nothing
}

console.log(splitString("JavaScript", 5)); 	// "JavaS cript"
console.log(splitString("Java", 2)); 		// "Ja va"
console.log(splitString("Automation", 3)); 	// ""
console.log(splitString("Hello", 6)); 		// ""
console.log(splitString("12", 1)); 		// "1 2"