const sumDigitsDouble = (str) => {
    let nums = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48){
            nums += parseInt(str[i]);
        }
    }

    if(nums === 0) return -1;
    else return nums * 2;
}

console.log(sumDigitsDouble("Javascript")); 	// -1
console.log(sumDigitsDouble("23abc45"));        // 28
console.log(sumDigitsDouble("Hi-23")); 	        // 10
console.log(sumDigitsDouble("ab12")); 	        // 6
console.log(sumDigitsDouble("n0numh3r3")); 	    // 12