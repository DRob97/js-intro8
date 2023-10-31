const pair1 = ['Alex', 'Alice'];
const pair2 = ['John', 'Jane'];
const pair3 = ['Max', 'Mark'];

const batch = [pair1, pair2, pair3];

console.log(batch);         // [ [ 'Alex', 'Alice' ], [ 'John', 'Jane' ], [ 'Max', 'Mark' ] ]
console.log(batch.length);  // 3

console.log(batch[1]);      // [ 'John', 'Jane' ]
console.log(batch[2][0]);   // Max

console.log(batch[0][1]);   // Alice

const arr = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8],
        [9, 10, 11, 12],
        [13, 14, 15]
    ]
];

console.log(arr[1][1][1]);  // 10

console.log(arr.length);    // 2
console.log(arr[1].length); // 3
console.log(arr[1][2].length); // 3