// Replacing occrrence of a sub-string within a string

let sentence = "Can you can a can as a canner can a can?";
console.log(sentence.replace("can", "###"));
console.log(sentence.replaceAll("can", "###"));
console.log(sentence.replaceAll("a", "x"));

let funky = sentence.replaceAll("c", "X").replaceAll("a", "O").replaceAll("n", "X").replaceAll("C", "X");
console.log(funky);

let quote = "You can do it";
console.log(quote.replace("hello", "GOOD MORNING"));
console.log(quote.replaceAll("hello", "GOOD MORNING"));