const names = ['John', 'Jane', 'Alex'];
// Create a new array with all names uppercased -> [ 'JOHN', 'JANE', 'ALEX' ]
const namesUpper = names.map(x => x.toUpperCase());
console.log(namesUpper); // [ 'JOHN', 'JANE', 'ALEX' ]
// Create a new array with the length of each name -> [ 4, 4, 4 ]
const namesLengths = names.map(name => name.length);
console.log(namesLengths);

const result = names.map((name, i) => ({
    index: i,
    value: name
}));
/*
const result2 = [];
for(let i = 0; i < names.length; i++){
    const object = {
        index: i,
        value: names[i]
    };
    result2.push(object);
}
*/

console.log(result);
// console.log(result2);

const result3 = [];

for(const [i, v] of Object.entries(names)){
    result3.push({
        index: Number(i),                       // Number() is required here or 'i' is output as a string
        value: v
    });
}

console.log(result3);