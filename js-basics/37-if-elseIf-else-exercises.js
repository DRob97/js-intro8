/*
Generate a random number between -2 & 2

*/
const min = -2, max = 2;
let ranNum = Math.floor(Math.random() * (max - min + 1 ) + min);
console.log(`The random number is ${ranNum}`);
if(ranNum > 0){
    console.log('The number is POSITIVE');
}
else if(ranNum < 0){
    console.log('The number is NEGATIVE');
}
else {
    console.log('The number is NEUTRAL');
}

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

const max1 = 12, min1 = 1;
let ranMonth = Math.floor(Math.random() * (max1 - min1 + 1 ) + min1);
if(ranMonth >= 3 && ranMonth <= 5){
    console.log('Spring');
}
else if(ranMonth >= 6 && ranMonth <= 8){
    console.log('Summer');
}
else if(ranMonth >= 9 && ranMonth <= 11){
    console.log('Fall');
}
else{
    console.log('Winter');
}
