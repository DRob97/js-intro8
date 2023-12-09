
// Window object

// console.log('window', window); // ReferenceError: window is not defined
/*
if(typeof global !== undefined){
    console.log('global', global);
}
else{
    console.log('global object is not available')
}

console.log(global);
//*/
// Code runner packages uses 'global' name in lew of 'window'

// if(typeof window !== undefined){
//     console.log('window', window);
// }
// else{
//     console.log('window object is not available')
// }

// console.log('window', window);

// Alert -------------------------------------
// window.alert('This is alert message!');

// Prompt -------------------------------------
    // Returns either value, null, or empty
// window.prompt('hey');


// Confirm -------------------------------------
// const userAnswer = window.confirm('Are you at least 18 y.o.?');
// console.log(userAnswer);    // Boolean, either true or false
// if(userAnswer){
//     console.log('Access granted');
// }
// else console.log('Access denied');

const zipCode = '10101';
// convert it to number
const zipCodeInt = Number.parseInt(zipCode);
const zipCodeInt2 = parseInt(zipCode);

/*
    Shortcut:
    window.alert() -> alert();
    window.prompt() -> prompt();
*/

// innerWidth and innerHeight -------------------------------------
console.log('innerHeight', innerHeight);
console.log('innerWidth', innerWidth);

// scrollTo -------------------------------------
scrollTo(0, 0); // Takes x and y coordinates, Try on browser

// reload() -------------------------------------
// window.location.reload();    // In the document, typing this without
                                // conditions repeatedly reloads the page

// localStorage -------------------------------------
console.log(localStorage);
// set item to localStorage
localStorage.setItem('userEmail', 'aa@ab.test');

// get item from localStorage
const userEmail = localStorage.getItem('userEmail');
console.log(userEmail);

// remove item from localStorage
// localStorage.removeItem('userEmail');

localStorage.setItem('userDetails', JSON.stringify({name: 'Joe', email: 'joe@gmail.com'}));

userDetails = localStorage.getItem('userDetails')
console.log(userDetails);

// Clear localStorage
localStorage.clear();