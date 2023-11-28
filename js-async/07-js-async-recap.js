/*
Go to https://www.techglobalschool.com/
Validate the main heading is "Looking to pursue a new career?"
*/
/*
function goToURL(){
    setTimeout(() => {
        console.log('You are on TechGlobal Website');
    }, 2000);
}

function validateMainHeading(){
    const actualText = '';  // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in requirements
    if(expectedText === actualText) console.log('Validation is successful!');
    else console.log('Validation failed');
}

function test1(){
    goToURL();
    validateMainHeading();
}

test1();
*/
/*
Expected output:
    'You are on TechGlobal Website'
    'Validation failed'

To get the expected ouput in order, we must resolve an issue with callback
*/

function goToURL(callback){
    setTimeout(() => {
        console.log('You are on TechGlobal Website');
        callback();
    }, 2000);
}

function validateMainHeading(){
    const actualText = '';  // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in requirements
    if(expectedText === actualText) console.log('Validation is successful!');
    else console.log('Validation failed');
}

function test1(){
    goToURL(() => {
        validateMainHeading();
    })
}

test1();
// Using promises
function goToURL(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() * 2)) resolve('URL is loaded!');
            else reject('Website is broken');
        }, 2000);
    });
}

function validateMainHeading(){
    const actualText = 'Looking to pursue a new career?';  // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in requirements
    if(expectedText === actualText) console.log('Validation is successful!');
    else console.log('Validation failed');
}

function test1(){
    goToURL().then(() => {
        validateMainHeading();
    }).catch((err) => {
        console.log('ERROR:', err);
    });
    
}

test1();

// Async await
function goToURL(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() * 2)) resolve('URL is loaded!');
            else reject('Website is broken');
        }, 2000);
    });
}

function validateMainHeading(){
    const actualText = 'Looking to pursue a new career?';  // You will learn how to get this later
    const expectedText = 'Looking to pursue a new career?'; // Given in requirements
    if(expectedText === actualText) console.log('Validation is successful!');
    else console.log('Validation failed');
}

async function test1(){
    try{
        await goToURL();
    validateMainHeading();
    } catch(err){
        console.log(err);
    }
}

test1();