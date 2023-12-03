const noXInVariables = (arr) => {
    const result = [];
    for(const element of arr){
        if(isNaN(element)) {
            if(element.includes('x') || element.includes('X')){
                let newElement = element.replaceAll('x', '');
                newElement = newElement.replaceAll('X', '');
                if(newElement.length >= 1) result.push(newElement);
                else continue;
            }
            else result.push(element);
        }
        else result.push(element);
    }
    return result;
}

console.log(noXInVariables(["abc", 123, "#$%"])); 		// ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); 		// ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); 	    // [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));	// ["yyy", "ABC"]