const batch = [
    ['Alex', 'Alice'],
    ['John', 'Jane'],
    ['Max', 'Mark']
];

const batchFlat = batch.flat();

console.log(batch);         // [ [ 'Alex', 'Alice' ], [ 'John', 'Jane' ], [ 'Max', 'Mark' ] ]
console.log(batchFlat);     // [ 'Alex', 'Alice', 'John', 'Jane', 'Max', 'Mark' ]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [
    [
        [1],
        [4, 5]
    ],
    [
        [7, 8],
        [9],
        [13]
    ]
];

const arrFlat = arr.flat();

console.log(arr);           // [ [ [ 1 ], [ 4, 5 ] ], [ [ 7, 8 ], [ 9 ], [ 13 ] ] ]
console.log(arrFlat);       // [ [ 1 ], [ 4, 5 ], [ 7, 8 ], [ 9 ], [ 13 ] ]

// [ 1, 4, 5, 7, 8, 9, 13 ]
console.log(arrFlat.flat());
// or
console.log(arr.flat(2));
// or
console.log(arr.flat(Infinity));