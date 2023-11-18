// We will solve the following on Saturday of this week (11/18/23):
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases       // 2
// count how many elements has 'i' ignoring cases           // 2
// count how many elements ends with 'e' ignoring cases     // 2 ?(should be 3)

// With filter
let appleFruits = fruits.filter(fruit => fruit.toLowerCase().includes('apple'));
console.log(`The number of elements that include the string 'apple' is ${appleFruits.length}`);

let fruitsWith_i = fruits.filter(fruit => fruit.toLowerCase().includes('i'));
console.log(`The number of elements that include the letter 'i' is ${fruitsWith_i.length}`);

let fruitsEndWith_e = fruits.filter(fruit => fruit.toLowerCase().endsWith('e'));
console.log(`The number of elements that end with the letter 'e' is ${fruitsEndWith_e.length}`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
// With reduce
const countApple = fruits.reduce((countApple, curFruit) => {
    return curFruit.toLowerCase().includes('apple') ? countApple + 1 : countApple;
}, 0);
console.log(`The number of elements that include the string 'apple' is ${countApple}`);

const count_I_Fruits = fruits.reduce((count_I_Fruits, curFruit) => {
    return curFruit.toLowerCase().includes('i') ? count_I_Fruits + 1 : count_I_Fruits;
}, 0);
console.log(`The number of elements that include the letter 'i' is ${count_I_Fruits}`);

const countFruitsEndWith_e = fruits.reduce((countFruitsEndWith_e, curFruit) => {
    return curFruit.toLowerCase().endsWith('e') ? countFruitsEndWith_e + 1 : countFruitsEndWith_e;
}, 0);
console.log(`The number of elements that end with the letter 'e' is ${countFruitsEndWith_e}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Akin's Soultions
/*
    effectively the same solutions I have but 1 done with a loop as an example
*/