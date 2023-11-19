// arrays

const user_info = ['johndoexxx', 'johndoe@gmail.com', 'John12345'];
/*
const username = user_info[0];
const email = user_info[1];
const password = user_info[2];
*/
// OR
const [username, email, password] = user_info;

console.log(username);
console.log(email);
console.log(password);

// objects
const person = {
    fName: 'John',
    lName: 'Doe',
    uName: 'johndoexxx',
    eMail: 'johndoe@gmail.com',
    passWord: 'John12345'
};

// Before ES6
//const fName = person.fName;
//const lName = person.lName;

//console.log(fName + ' ' + lName);

// After ES6
const {fName, lName, uName, eMail, passWord} = person;

console.log(fName, lName);
console.log(uName, eMail, passWord);