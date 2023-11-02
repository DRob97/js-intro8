let i = 1;

while(i <= 5){
    console.log(i);
    i++
}

console.log('The rest of the program')

// Count all the even numbers between 1 and 10 (both inclusive)

i = 1;
counter = 0;

while(i <= 10){
    if(i % 2 === 0) counter++;
    i++
}

console.log(counter);