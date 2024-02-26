const toCamelCase = (str) => {
    const array = str.trim().split(' ');
    if(array.length === 1) return array.join('');


}

console.log('\nTask 01');
console.log(toCamelCase("first name")); 	        //"firstName"
console.log(toCamelCase("last     name")); 	        //"lastName"
console.log(toCamelCase("   ZIP CODE")); 	        //"zipCode"
console.log(toCamelCase("I Learn Java Script"));  	// "iLearnJavaScript"
console.log(toCamelCase("helloWorld"));	            // "helloWorld"