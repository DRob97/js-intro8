// Globally declared array
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Print each element to console
for(const fruit of fruits){
    console.log(fruit);
}

// Count how many elements has 'apple' ignoring cases -> 2
let countApple = 0;

for(const fruit of fruits){
    if(fruit.toLowerCase().includes('apple')) countApple++;
}

console.log(countApple);    // 2

function print(){
    console.log(fruits);
}

print();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var x = 10;
let y = 11;
const z = 12;

// Access globally
console.log(x);
console.log(y);
console.log(z);

// Access in a block
{
    console.log(x);
    console.log(y);
    console.log(z);    
}

// Access in a function - IIFE (Immediately Invoked Function Expression)
(function () {
    console.log(x);
    console.log(y);
    console.log(z);
})();