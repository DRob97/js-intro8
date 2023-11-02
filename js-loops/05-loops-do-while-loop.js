let i = 1;

while(i <= 3){
    console.log('While Loop | Hello World');
    i++
}


// do-while loop
let j = 1;

// Complex Akin code below
do{
    console.log('Do While Loop | Hello World');
    j++;
} while(j <= 3);

let pin = 1234; // 1000 9999
let attempt = 0;
let randomPin;
do {
    randomPin = Math.floor(Math.random() * 9000) + 1000;
    if(pin === randomPin) {
        console.log("YOU ARE IN!");
    }
    else {
        attempt++;
        if(attempt === 10) {
            console.log('You already attempted 10 times!!!')
            console.log('YOU ARE LOCKED FOR 10 MINUTES!!!');
            break;
        }
    }
} while (pin !== randomPin);