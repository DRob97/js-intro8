// Regular function
function product(x, y){
    return x * y;
}

console.log(product(3, 5));     // 15
console.log(product(3, 2));     // 6

// With currying
function multiply(x){
    return function (y){
        return x * y;
    }
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(10));    // 20
console.log(triple(7));     // 21