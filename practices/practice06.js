/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
*/
function firstPos(arr){
    /*
    for(const x of arr){
        if(x > 0){
            return x;
        }
    }
    */
    let i = 0;
while(i < arr.length){
    if(arr[i] > 0){
        return arr[i];
    }
    i++;
}
}

console.log(firstPos([0, 3, -9,  5, 8]));        // 3
console.log(firstPos([-2, 0, -7, 10, -5]));      // 10
console.log(firstPos([1, 2, 3, -2]));            // 1

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
*/
function lastNeg(arr){
    for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] < 0) return arr[i];
    }
}
console.log(lastNeg([0, 3, -9,  5, 8]));         // -9
console.log(lastNeg([-2, 0, -7, 10, -5]));       // -5
console.log(lastNeg([1, 2, 3, -2]));             // -2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
*/
function max(arr){
    /*
    let tempArr = arr.sort((a, b) => a - b);
    
    // return tempArr.pop();
    return tempArr[arr.length - 1];
    */
   return Math.max.apply(Math, arr);
   // return Math.max(...arr);
}

console.log(max([0, 3, -9,  5, 8])); 	    // 8
console.log(max([-2, 0, -7, 10, -5])); 	    // 10
console.log(max([1, 2, 3, -2]));             // 3
console.log(max([-5, -2]));                  // -2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
*/
function firstLongest(arr){
    let longestElement;
    for(let i = 0; i < arr.length; i++){
        if(longestElement === undefined) longestElement = arr[i];
        else if(arr[i].length > longestElement.length) longestElement = arr[i];
    }
    return longestElement;
}

console.log(firstLongest(["red", "blue", "yellow", "white"])); 	// "yellow"
console.log(firstLongest(["Apple", "Banana", "Orange"]));       // "Banana"
console.log(firstLongest(["purple", "yellow", "orange"]));      // "purple"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
*/
function commonElements(arr1, arr2){
    const common = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])) common.push(arr1[i]);
    }
    return common;
}

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])); 	    // [ 20, 50, 70 ]
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])); 		        // [ ]
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));    // [ "abc" ]