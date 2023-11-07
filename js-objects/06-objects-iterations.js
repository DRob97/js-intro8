const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};

// Output the keys
for(const key of Object.keys(car)){
    console.log(key);
}
console.log('\n')

Object.keys(car).forEach(key => console.log(key));
console.log('\n')

for(let i = 0; i < Object.keys(car).length; i++){
    console.log(Object.keys(car)[i]);
}

// Output the values
for(const value of Object.values(car)){
    console.log(value);
}
console.log('\n')

Object.values(car).forEach(value => console.log(value));
console.log('\n')

for(let i = 0; i < Object.values(car).length; i++){
    console.log(Object.values(car)[i]);
}

// Output the entries
for(const entry of Object.entries(car)){
    console.log(entry);
}
console.log('\n')

Object.entries(car).forEach(entry => console.log(entry));
console.log('\n')

for(let i = 0; i < Object.entries(car).length; i++){
    console.log(Object.entries(car)[i]);
}

// How to fetch all the keys and values separately, not as a pair-array
for(const [key, value] of Object.entries(car)){
    console.log(`The key is ${key}, and the value is ${value}.`);
}

Object.entries(car).forEach((key, value) => console.log(key, value));

// Check if any value in the car object is 'red'
console.log(Object.values(car).includes('red'));

// Check if any key in the car is 'engine'
console.log(Object.keys(car).indexOf('engine') >= 0);