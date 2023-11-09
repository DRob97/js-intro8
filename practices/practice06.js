/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
*/

firstPos([0, 3, -9,  5, 8]);        // 3
firstPos([-2, 0, -7, 10, -5]);      // 10
firstPos([1, 2, 3, -2]);            // 1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
*/

lastNeg([0, 3, -9,  5, 8]);         // -9
lastNeg([-2, 0, -7, 10, -5]);       // -5
lastNeg([1, 2, 3, -2]);             // -2