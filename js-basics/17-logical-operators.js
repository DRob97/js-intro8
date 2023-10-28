let var1 = 10 === "10" || 5 > 2; // False or true

console.log(var1);  // true

let var2 = (!true && true) || !false; // False or true
console.log(var2);  // true

let var3 = "" || NaN || false || undefined || null || 0;
console.log(var3);