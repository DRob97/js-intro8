const findLongestWord = (str) => {
    if(!str.trim()) return '';

    const splitString = str.split(' ');
    // console.log(splitString);
    const index = splitString.reduce((longest, current) => current.length > longest.length ? longest = current : longest, '');
    
    return index;
}

console.log('Task 5:');

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 	// "jumped"
console.log(findLongestWord("This is a sample string for testing")); 		    // "testing"
console.log(findLongestWord("One two ten")); 				                    // "One"
console.log(findLongestWord("")); 					                            // ""
console.log(findLongestWord("     ")); 					                        // ""