const person = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    phone: '312 000-0000'
};

console.log(person['fName']);
console.log(person['lName']);
console.log(person['age']);
console.log(person['phone']);

// Following loop does the above block of code
for(const variable in person){
    console.log(person[variable]);
}