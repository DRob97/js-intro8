// just a snippet file

function addNumbers(a, b){
    const sum = a * b;
    return sum;
}

addNumbers(10, 5);  // 15 -> why 50?

/*
console (log, warn, error...) is the first tool to debug
*/

function onlyEvenNumbers(num) {
    if(num % 2 === 0) console.log('Yes, it is even!');
    else if (num % 3 === 0) console.warn('Beware, this is not permitted number!');
    else console.error('No, its not even!');
}

onlyEvenNumbers(10); // 'Yes, it is even!'
onlyEvenNumbers(9);  // 'Beware, this is not permitted number!'
onlyEvenNumbers(7);  // 'No, its not even!'

function countNum(num){
    console.time();
    for(let i = 0; i < num; i++){
        console.log(i);
    }
    console.timeEnd();
}

//countNum(10);
countNum(100);