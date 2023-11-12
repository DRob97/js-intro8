const numbers = [2, 5, 10, 7, 8, 1, 0];

/*
                    Map // you return an array with the same size as the origina, but the elements are replaced
                    Filter // you return partial array and the elements within the array that match a specific condition
                    Reduce // visits each element in an array and returns a single result
Counting elements
    Count evens                     -> 4
    Count odds                      -> 3
    Count numbers divisible by 3    -> 1
    Count numbers divisible by 4    -> 2
    Count numbers divisible by 5    -> 3
    Count positive numbers          -> 6

Finding specific element
    Greatest number                 -> 10
    Smallest number                 -> 0

Accumulate elements
    Find sum of numbers             -> 33
    Find product of numbers         -> 0
    Find average of the numbers     -> ~4.7

Filtering and grouping elements
    Get all even numbers            -> [2, 10, 8, 0]
    Get all odd numbers             -> [5, 7, 1]
    Get all positive numbers        -> [2, 5, 10, 7, 8, 1]
    etc.

Change all the elements
    Multiply each element by 3      -> [6, 15, 30, 21, 24, 3, 0]
    True for even, false for odd    -> [true, false, true, false, true, false, true]
*/

numbers = [2, 5, 10, 7, 8, 1, 0];
// Using map
const numbersMultiplyBy3 = numbers.map(number => number * 3);
const numbersEvenOrOdd = numbers.map(number => number % 2 === 0 ? true : false);

console.log(numbersMultiplyBy3);
console.log(numbersEvenOrOdd);

numbers = [2, 5, 10, 7, 8, 1, 0];
// Using filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
const positiveNumbers = numbers.filter(number => number > 0);

console.log(evenNumbers);
console.log(oddNumbers);
console.log(positiveNumbers);

numbers = [2, 5, 10, 7, 8, 1, 0];
// Using reduce
const sum = numbers.reduce((current, total) => total += current, 0);
const countEven = numbers.reduce((counter, current) => current % 2 === 0 ? counter + 1 : counter, 0); // This does not work currently

console.log(sum);
console.log(countEven);