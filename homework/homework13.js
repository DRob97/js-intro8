// Task 01
/*
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and
consonants.
*/
const countVC = (str) => {
    const string = str.split('');
    const vows = 'aeiou', cons = 'bcdfghjklmnpqrstvwxyz';
    let v = 0, c = 0;

    string.forEach((char) => {
        if(vows.includes(char.toLowerCase())) v++;
        else if(cons.includes(char.toLowerCase())) c++;
    })

    const typeCounts = {
        vowels: v,
        consonants: c
    }

    return typeCounts;
}

console.log('Task 01')
console.log(countVC("Hello"));       		// {vowels: 2, consonants: 3}
console.log(countVC("Programming")); 	    // {vowels: 3, consonants: 8}
console.log(countVC("123AbC"));       	    // {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz"));      	// {vowels: 0, consonants: 3}
console.log(countVC(""));             	    // {vowels: 0, consonants: 0}

console.log('\n')
// Task 02
/*
Write a function named countChars() which takes a string argument and returns an object with the count of letters,
numbers, and specials.

NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any
category
*/
const countChars = (str) => {
    const string = str.split('');

    const letts = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    
    let lets = 0, numbs = 0, specs = 0;

    string.forEach((char) => {
        if(letts.includes(char.toLowerCase())) lets++;
        else if(nums.includes(char)) numbs++;
        else if(char !== ' ')specs++;
    })

    const anArray = [lets, numbs, specs];
    const anArray2 = ["letters", "numbers", "specials"];
    const countStuff = {};
    anArray.forEach((counter, index) => {
        if(counter > 0){
            countStuff[`${anArray2[index]}`] = counter;
        }
    })
    

    return countStuff;
}

console.log('Task 02')
console.log(countChars("Hello"));             	    // {letters: 5}
console.log(countChars("Programming 123")); 	    // {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#"));       	    // {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321"));       	    // {numbers: 10}
console.log(countChars("   "));                	    // {}
console.log(countChars(""));                   	    // {}

console.log('\n')
// Task 03
/*
Write a function named maxOccurrences() which takes a string argument and returns the character that appears the most
number of times in the string.

NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. Ignore spaces.
If the string is empty or consist of spaces only, then return an empty string.
*/
const maxOccurrences = (str) => {
    if(!str.trim()) return '';

    const arr = str.trim().split('').filter(char => char !== ' ');
    const arr2 = arr.sort();
    const arr3 = [];

    arr2.map((element, index) =>{
        let counter = 0;
        if(element === arr[index - 1]);
        else{
            do{
                counter = counter + 1;
                index++;
            } while(arr[index] === element);

            arr3.push([counter, element]);
        }
    })

    let max = -Infinity;
    arr3.forEach((pair) => {
        if(pair[0] > max) max = pair[0];
    })

  for(const pair of arr3){
    if(pair[0] === max) return pair[1];
  }
}

console.log('Task 03')
console.log(maxOccurrences("Hello"));      	    // "l"
console.log(maxOccurrences("Occurrences")); 	// "c"
console.log(maxOccurrences("  ab  "));  	    // "a"
console.log(maxOccurrences("12  3  21"));  	    // "1"
console.log(maxOccurrences("   "));   	        // ""
console.log(maxOccurrences(""));  		        // ""

console.log('\n')
// Task 04
/*
Write a function named starOut() which takes a string argument and returns it back with every star removed as well as
the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/
const starOut = (str) => {
    const arr = str.split('');
    let i = 0;

    do{
        if(arr[i] === '*'){
            let j = (i);
            do{
                j++;
            } while(arr[j] === '*')
            arr.splice((i - 1), j)
        }
        else i++;
    } while(i < arr.length && arr[0])
    
    return arr.join('');
}

console.log('Task 04')
console.log(starOut("ab*cd")); 	        // "ad"
console.log(starOut("ab**cd")); 	    // "ad"
console.log(starOut("xm*sm*sy")); 	    // "xy"
console.log(starOut("abc"));  	        // "abc"
console.log(starOut("***"));  	        // ""
console.log(starOut("  "));   	        // "  "
console.log(starOut(""));  	            // ""

console.log('\n')
// Task 05
/*
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the roman numeral
converted to the number. A roman numeral is a set of symbols that add up to a number. CXII // 100+10+1+1 // 112
NOTE:
Symbol    Value
I           1
V           5
X           10
L           50
C           100
D           500
M           1000
*/
const romanToInt = (str) => {
    const romanArray = [ { symbol: 'I', value: 1 }, { symbol: 'V', value: 5}, { symbol: 'X', value: 10},
    { symbol: 'L', value: 50}, { symbol: 'C', value: 100}, { symbol: 'D', value: 500}, { symbol: 'M', value: 1000} ]

    let  number = 0;
    const numeralArray = str.split('');
    let previousValue = 0;

    numeralArray.forEach((character, index) => {
        let s1;
        for(const obj of romanArray){
            if(obj.symbol === character) s1 = obj.value;
        }
        if((index + 1) < numeralArray.length){
            let s2;
            for(const obj of romanArray){
                if(obj.symbol === numeralArray[index + 1]) s2 = obj.value;
            }
            if(s1 >= s2){
                number += s1;
                previousValue = s1;
            }
            else{
                number += (s2 - s1);
                previousValue = (s2 - s1);
            }
        }
        else if(s1 > previousValue && previousValue !== 0){
            
        }
        else number += s1;
    })
    return number;
}

console.log('Task 05')
console.log(romanToInt("I")); 		            // 1
console.log(romanToInt("IV")); 		            // 4
console.log(romanToInt("CXII")); 		        // 112
console.log(romanToInt("MMM")); 		        // 3000
console.log(romanToInt("MMMDCCCLXXXVIII")); 	// 3888
console.log(romanToInt("MDCLXVI")); 	        // 1666