const names = ['John', 'Jane', 'Alex', 'Max'];

// Output all these names to the console
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let name = 'Suzanne';
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// It is preferred to use for...of loop instead of for loop
// John is a name of names
// Jane is a name of names
// Alex is a name of names
// Max is a name of names
names = ['John', 'Jane', 'Alex', 'Max'];
for(const name of names){
    console.log(name);
}

// Output the following array with case changed to uppercase
names = ['John', 'Jane', 'Alex', 'Max'];
for(const name of names){
    console.log(name.toUpperCase());
}

// Count how many names start with J
names = ['John', 'Jane', 'Alex', 'Max'];
let startsWithJ = 0;
for(const name of names){
    if(name.startsWith('J')) startsWithJ++;
}
console.log(`The number of names that start with 'J' is ${startsWithJ}.`);