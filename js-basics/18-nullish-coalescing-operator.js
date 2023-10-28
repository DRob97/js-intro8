let var1 = null || true;

console.log(var1);  // True

let var2 = null ?? true;

console.log(var2);  // True

let var3 = undefined || true;

console.log(var3);  // True

let var4 = undefined ?? true;

console.log(var4);  // True

// Difference
// With || operator, we will always get the value that could evaluate to true
// with ?? operator, we will get first value if it is NOT null or undefined, otherwise we will get the second value

let var5 = 0 || "Hello";
let var6 = 0 ?? "Hello";

console.log(var5);
console.log(var6);