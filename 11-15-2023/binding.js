// 'this' keyword

console.log(this);  // {}
// Note: you might get different values
// For example:
// on client side code you might get: Window object
// on server side code you might get: global object


// 'this' in objects

// Implicit binding -----------------------------------
let person = {
    name: 'Alex',
    greet: function(){
        console.log(`Hi, ${this.name}`);
    },
};

person.greet(); // 'this' is referring to person object

// Explicit binding -----------------------------------
function greet(){
    console.log(this);                  // Global object => { name: 'John' }
    console.log(`Hi, ${this.name}`);    // Hi, undefined => Hi, John
}
let person2 = {
    name: 'John',
};

greet();

// Goal is to attach greet function to person2 object
// Thus, changing the context of this from 'global object' to 'person2'

greet.call(person2);

// Example to .call -----------------------------------

const student = {name: 'Alex'};
const teacher = {name: 'Hasan'};
const client = {name: 'Joe'};

function welcome(){
    console.log(`Welcom, ${this.name}`);
}

welcome.call(student);
welcome.call(teacher);
welcome.call(client);

// Passing argument to .call

const jane = {age: 20};
function sayHi(name){
    console.log(`Hi, ${name}. Your age is: ${this.age}`);
}

sayHi();
sayHi.call(jane, 'Jane');

// No need to pass object
function sayHi2(name){
    console.log(`Hi, ${name}`);
}

sayHi2.call(null, 'Jane2');

// Apply ----------------------------------------------
// Without argument .call and .apply works the same
const user = {name: 'Alex'};

function welcomeUser(name, city, state, zipCode){
    console.log(`Welcome, ${name} and your location is ${city}, ${state}, and ${zipCode}`);
}

welcomeUser.call(null, 'Alex', 'Chicago', 'IL', 60000);

const user2 = ['Jane', 'LA', 'CA', 10000];
welcomeUser.apply(null, user2);
// With argument, .apply takes an array

// BIND -----------------------------------------------
// Similar to .call and .apply
// only difference is it return a function
// that you can use or call later

const user3 = {
    name: 'Alan',
    age: 20, 
    hobbies: ['running', 'reading', 'hiking'],
    greet(){
        console.log(this);      // user3
        //console.log(`Hi, ${this.name}`);
        this.hobbies.forEach(function(hobby, idx){
            console.log(`${this.name}'s hobbies are: ${idx + 1} ${hobby}`);
            console.log(hobby);  // Object global
        }.bind(this)
        );
    },  
};

user3.greet();
// 1. user3
// 2. Object [global] 3 times

// Regular functions have its own 'this'
// Then I want to change the context of 'this' inside regular function to 'this' of user3

// Arrow functions doesn't have its own 'this'
const user4 = {
    name: 'Alan',
    age: 20, 
    hobbies: ['running', 'reading', 'hiking'],
    greet(){
        //console.log(this);      // user4
        //console.log(`Hi, ${this.name}`);
        this.hobbies.forEach((hobby, idx) => {
            console.log(`${this.name}'s hobbies are: ${idx + 1} ${hobby}`);
            //console.log(hobby);  // Object global
        });
    },  
};

user4.greet();

/*

someFunction.call(obj, 'arg1', 'arg2', 'arg3');
someFunction.apply(obj, ['arg1', 'arg2', 'arg3']);

const args = ['arg1', 'arg2', 'arg3'];

someFunction.call(obj, args);       // error
someFunction.call(obj, ...args);    // valid
someFunction.apply(obj, args);      // valid
*/