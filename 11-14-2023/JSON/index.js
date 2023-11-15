// JSON - JavaScript Object Notration
// Easiest way to exchange/interchange data

// const personJSON = '{ "name": "Gifts for Thanksgiving", "price": 19.99 }';

const personObject = {
    name: "Gifts for Thanksgiving",
    price: 19.99,
};

console.log(personObject);          // { name: 'Gifts for Thanksgiving', price: 19.99 }
console.log(typeof personObject);   // object
console.log(personObject.name);     // "Gifts for Thanksgiving"
console.log(personObject.price);    // 19.99

// JSON.stringify() -> convert object to JSON

const personJSON = JSON.stringify(personObject);

console.log(personJSON);          // {"name":"Gifts for Thanksgiving","price":19.99}
console.log(typeof personJSON);   // string
console.log(personJSON.name);     // undefined
console.log(personJSON.price);    // undefined


const personJSON2 = '{"name": "Gifts for Christmas", "pirce": 30.99' 
// JSON.parse() -> converts 


// Shallow Copy vs. Deep Copy
const products = [1, {name: "Toys", price: 80}, 3];

const copyOfProducts = [...products];

console.log(products);
console.log(copyOfProducts);

copyOfProducts[1].name = 'Clothes';

console.log(products);          // Get 'Clothes' here for the product name, even though this was not the modified variable
console.log(copyOfProducts);

// When we shallow copy arrays and objects, it actually copes the first level properties
// Nested arrays or objects are not copied

// Shallow copy example
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2[0] = 0;
console.log(arr);   // [ 1, 2, 3 ]
console.log(arr2);  // [ 0, 2, 3 ]

// Es6 spread operator, concat

// Deep copy
// Examples => lodash library
// Or at least use JSON
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const products2 = [1, {name: "Toys", price: 80}, 3];

const copyOfProducts2 = JSON.parse(JSON.stringify(products2));

console.log(products2);
console.log(copyOfProducts2);

copyOfProducts2[1].name = 'Clothes';

console.log(products2);             // Get 'Toys' for the name here instead of 'Clothes'
console.log(copyOfProducts2);

// helpers function
function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
}