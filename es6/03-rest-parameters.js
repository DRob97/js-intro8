/*
Write a function that takes any number of arguments and returns their sum
sum()               // 0
sum(5)              // 5
sum(5, 2)           // 7
sum(3, 5, 2)        // 10
sum(7, 3, 5, 2)     // 17
sum(1, 7, 3, 5, 2)  // 18
*/

function sum(...args){
    // console.log(args);
    // console.log(typeof args);
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    
    // console.log(args.reduce((sum, curr) => sum + curr, 0));

    console.log(sum);
}

sum();                               // 0
sum(5);                              // 5
sum(5, 2);                           // 7
sum(3, 5, 2);                        // 10
sum(7, 3, 5, 2);                     // 17
sum(1, 7, 3, 5, 2);                  // 18
sum(1, 7, 3, 5, 2, 5, 6, 7, 8, 9);   // 53
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function product(num1 = 0, ...args){
    let product = num1;
    for(const arg of args){
        product *= arg;
    }
    console.log(product);
}

product();              // undefined
product(5);             // 5
product(5, 2, 3, 4);    // 120