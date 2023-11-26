
function print1(){
    console.log('1');
}

function print2(){
    console.log('2');
}

function print3(){
    console.log('3');
}

print1();
print2();
print3();

/*
1
2
3
*/

print1();
setTimeout(() => {
    print2();
}, 3000);   // the 3000 is miliseconds, or 3 seconds
print3();

/*
1
3
2
*/

// What if you would like to wait for 2?
    // you must syncronize your code
// enter credentials
// click on login - 20 seconds
// change your profile picture

print1();
setTimeout(() => {
    print2();
}, 3000);   // the 3000 is miliseconds, or 3 seconds
print3();