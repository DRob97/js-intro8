const appleStore = [
    {
      productName: "iPhone 14 Pro",
      quantity: 50,
      price: 1099.99,
    },
    {
      productName: "MacBook Pro 16-inch",
      quantity: 30,
      price: 2399.99,
    },
    {
      productName: "iPad Air",
      quantity: 75,
      price: 599.99,
    },
    {
      productName: "Apple Watch Series 7",
      quantity: 100,
      price: 399.99,
    },
    {
      productName: "AirPods Pro",
      quantity: 200,
      price: 249.99,
    }
];
  
// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following objects must be initialized with 'let' rather than 'const' to allow them to be updated as whole objects
let mostExpensive = {
    productName: '',
    quantity: 0,
    price: 0 
};
let leastExpensive = {
    productName: '',
    quantity: 0,
    price: 0
};
let greatestQuantity = {
    productName: '',
    quantity: 0,
    price: 0
};
let leastQuantity = {
    productName: '',
    quantity: 0,
    price: 0
};

const productNames = [];

for(let i = 0; i < appleStore.length; i++){
    if(i === 0){
        // Assign mostExpensive object the values of the first object in the array
        mostExpensive = appleStore[i];
        // Assign leastExpensive object the values of the first object in the array
        leastExpensive = appleStore[i];
        // Assign greatestQuantity object the values of the first object in the array
        greatestQuantity = appleStore[i];
        // Assign leastQuantity object the values of the first object in the array
        leastQuantity = appleStore[i];
        continue;
    }
    // Compare for prices (least and greatest)
    if(appleStore[i].price > mostExpensive.price){
        mostExpensive = appleStore[i];
    }
    else if(appleStore[i].price < leastExpensive.price){
        leastExpensive = appleStore[i];
    }
    // Compare for quantity (least and greatest)
    if(appleStore[i].quantity > greatestQuantity.quantity){
        greatestQuantity = appleStore[i];
    }
    else if(appleStore[i].quantity < leastQuantity.quantity){
        leastQuantity = appleStore[i];
    }
    // Push product names into their own array
    productNames.push(appleStore[i].productName);
}

console.log(mostExpensive.productName);
console.log(leastExpensive.productName);
console.log(greatestQuantity.productName);
console.log(leastQuantity.productName);
console.log(productNames);
//*/
/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Akin's solution
if (appleStore.length > 0) {

    let most_expensive_product = appleStore[0];
    let most_affordable_product = appleStore[0];
    let product_with_biggest_quantity = appleStore[0];
    let product_with_lowest_quantity = appleStore[0];
    const product_names = [];


    for (const product of appleStore) {
        product_names.push(product.productName);
        if (product.price > most_expensive_product.price) most_expensive_product = product;
        if (product.price < most_affordable_product.price) most_affordable_product = product;
        if (product.quantity > product_with_biggest_quantity.quantity) product_with_biggest_quantity = product;
        if (product.quantity < product_with_lowest_quantity.quantity) product_with_lowest_quantity = product;
    }

    console.log(most_expensive_product.productName);
    console.log(most_affordable_product.productName);
    console.log(product_with_biggest_quantity.productName);
    console.log(product_with_lowest_quantity.productName);
    console.log(product_names);
}
else console.error('There is no product in the AppleStore!!!');
*/