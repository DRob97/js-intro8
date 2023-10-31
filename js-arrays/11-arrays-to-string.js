const arr1 = ['Apple', 'Orange', 'Pineapple'];

let str1 = arr1.toString();
let str2 = arr1.join();

console.log(arr1);
console.log(str1);          // Apple,Orange,Pineapple
console.log(str2);          // Apple,Orange,Pineapple

let str3 = arr1.join(' - ');
console.log(str3);          // // Apple - Orange - Pineapple

// Apple | Orange | Pineapple
let str4 = arr1.join(' | ');
console.log(str4);              // Apple | Orange | Pineapple

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr2 = [1, 2, 3];

// 1,2,3
// 1 === 2 === 3

let str5, str6;
str5 = arr2.toString();
str6 = arr2.join(' === ');

console.log(str5);  // 1,2,3
console.log(str6);  // 1 === 2 === 3

