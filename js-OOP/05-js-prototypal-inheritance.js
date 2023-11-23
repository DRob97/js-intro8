// Prototypal inheritance before ES6

// Person Object with 3 functions
const person = {
    eat: function(){
        console.log('EAT');
    },
    sleep: function(){
        console.log('SLEEP');
    },
    walk: function(){
        console.log('WALK');
    }
};
person.sleep();

// Create programmer object with 4 functions, the 4th being code
// In this instance we could spread person into programmer, but this is not what was wanted for the example
const programmer = {
    code: function(){
        console.log('CODE');
    },
    __proto__: person
};
programmer.eat();
console.log(programmer);
console.log('\n');
// Create singer object with 4 functions, sing
const singer = {
    __proto__: person,
    sing: function(){
        console.log('SING');
    }
};
singer.sing();
singer.walk();
// Prototype chaining
console.log(singer.__proto__);  // returns person
console.log(singer.__proto__.__proto__);    // returns: [Object: null prototype] {}

// singer.hasOwnProperty