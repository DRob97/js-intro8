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

//console.log(appleStore[0]);

const mostExpensive = {
    productName: '',
    quantity: 0,
    price: 0
};
const leastExpensive = {
    productName: '',
    quantity: 0,
    price: 0
};
const greatestQuantity = {
    productName: '',
    quantity: 0,
    price: 0
};
const leastQuantity = {
    productName: '',
    quantity: 0,
    price: 0
};

const productNames = [];

for(let i = 0; i < appleStore.length; i++){
    if(i === 0){
        // Assign mostExpensive object the values of the first object in the array
        mostExpensive.productName = appleStore[i].productName;
        mostExpensive.quantity = appleStore[i].quantity;
        mostExpensive.price = appleStore[i].price;
        // Assign leastExpensive object the values of the first object in the array
        leastExpensive.productName = appleStore[i].productName;
        leastExpensive.quantity = appleStore[i].quantity;
        leastExpensive.price = appleStore[i].price;
        // Assign greatestQuantity object the values of the first object in the array
        greatestQuantity.productName = appleStore[i].productName;
        greatestQuantity.quantity = appleStore[i].quantity;
        greatestQuantity.price = appleStore[i].price;
        // Assign leastQuantity object the values of the first object in the array
        leastQuantity.productName = appleStore[i].productName;
        leastQuantity.quantity = appleStore[i].quantity;
        leastQuantity.price = appleStore[i].price;
        continue;
    }
    // Compare for prices (least and greatest)
    if(appleStore[i].price > mostExpensive.price){
        mostExpensive.productName = appleStore[i].productName;
        mostExpensive.quantity = appleStore[i].quantity;
        mostExpensive.price = appleStore[i].price;
    }
    else if(appleStore[i].price < leastExpensive.price){
        leastExpensive.productName = appleStore[i].productName;
        leastExpensive.quantity = appleStore[i].quantity;
        leastExpensive.price = appleStore[i].price;
    }
    // Compare for quantity (least and greatest)
    if(appleStore[i].quantity > greatestQuantity.quantity){
        greatestQuantity.productName = appleStore[i].productName;
        greatestQuantity.quantity = appleStore[i].quantity;
        greatestQuantity.price = appleStore[i].price;
    }
    else if(appleStore[i].quantity < leastQuantity.quantity){
        leastQuantity.productName = appleStore[i].productName;
        leastQuantity.quantity = appleStore[i].quantity;
        leastQuantity.price = appleStore[i].price;
    }
    // Push product names into their own array
    productNames.push(appleStore[i].productName);
}

console.log(mostExpensive.productName);
console.log(leastExpensive.productName);
console.log(greatestQuantity.productName);
console.log(leastQuantity.productName);
console.log(productNames);
/*
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
*/