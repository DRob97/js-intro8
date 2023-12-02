const reverseSentence = function(str){
    const newArr = str.toLowerCase().split(' ');
    if(newArr.length > 1){
        const backwards = newArr.reverse();
        let firstWord = backwards[0];
        firstWord = firstWord.replace(firstWord[0], firstWord[0].toUpperCase());
        backwards[0] = firstWord;
        return backwards.join(' ');
    }
    else return 'There is not enough words!';
}

console.log(reverseSentence("Hello")); 		            // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); 		// "Fun is javascript"
console.log(reverseSentence("This is a sentence")); 	// "Sentence a is this"