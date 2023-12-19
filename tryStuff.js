const reverseStringWords = (str) => {
    let strTrimmed = str.trim();
    if(!strTrimmed) return '';
    const strArr = strTrimmed.split(' ');
   for(let i = 0; i < strArr.length; i++){
    let reverseMe = strArr[i];
    let meReversed = reverseMe.split('').reverse().join('');
    strArr[i] = meReversed;
   }
    return strArr.join(' ');
}

console.log(reverseStringWords("Hello World")); // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // "olleH"
console.log(reverseStringWords("")); // ""
console.log(reverseStringWords(" ")); // ""