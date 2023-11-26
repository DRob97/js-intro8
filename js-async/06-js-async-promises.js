// control-shift-p gives list of shortcuts
/*
// Syntax of Promise
const myPromise = new Promise((resolve, reject) => {
    resolve('Kept!');
    reject('Broken');
});

console.log(myPromise); // Promise { 'Kept!' }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
const promiseAge = new Promise((resolve, reject) => {
    const age = Math.floor(Math.random() * 30);
    console.log(`Applicant is ${age} years old.`);
    if(age >= 16){
        resolve();
    }
    else reject();
});

promiseAge.then(() => {
    // success body
    console.log('Can take test');
}).catch(() => {
    // failure body
    console.log('No test for you');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Returning promises in a function
function testAGe() {
    return new Promise((resolve, reject) => {
        const age = Math.floor(Math.random() * 30);
        console.log(`Applicant is ${age} years old.`);
        if(age >= 16){
            resolve();
        }
        else reject();
    });
}

testAGe().then(() => {
    // success code
    console.log('You can get DL');
}).catch(() => {                        // Without .catch(), there will be an error upon failure/rejection
    console.log('You cannot get DL');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A login promise
function login(username, password){
    return new Promise((resolve, reject) => {
        if(username === 'TechGlobal'){
            // Check passord
            if(password === 'Test1234') resolve();
            else reject('Password is invalid');
        }
        else reject('Username is invalid');
    });
}

login('TechGlobal', 'Test1234').then(() => {
    console.log('You are logged in');
}).catch((err) => {
    if(err === 'Username is invalid') console.log('Invlaid username entered');
    else console.log('Invalid password entered');
});