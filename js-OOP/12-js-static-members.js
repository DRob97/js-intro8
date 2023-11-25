// Static properties and functions
// Static properties and functions are accessed with class names
// They do not belong to object

// All the Math methods that we use are static methods
Math.max();
Math.random();

// Static property
console.log(Math.PI);   // 3.141592653589793...
console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991

class Computer{
    // non-static -> belongs to object
    brand = 'Apple';

    // non-static -> belongs to object
    run(){
        console.log('RUN FUNCTION')
    }
///////////////////////////////////////
    // static -> belongs to class
    static info = 'SECRET INFO';

    static open(){
        console.log('OPEN FUNCTION');
    }
}

const comp1 = new Computer();
console.log(comp1.brand);   // Apple
comp1.run();    // RUN FUNCTION

// comp1.open();   // TypeError: comp1.open is not a function
console.log(comp1.info);    // undefined
console.log(Computer.info);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Person{
    static hasEyes = true;  // something that is static is assumed to belong to every object that will be created
                                // making a static 'trait' makes accessing it easier, as well as assinging it to all objects created
    constructor(name, address, gender){ // These are information which vary from person to person
        this.name = name;
        this.address = address;
        this.gender = gender;
    }

    walk(){
        console.log(this.name, 'NON-STATIC WALK FUNCTION');
    }
    static breathe(){
        console.log('STATIC BREATHE FUNCTION');
    }
}

const ayca = new Person('Ayca', 'AL', 'Female');
const suzanne = new Person('Suzanne', 'IL', 'Female');
const dylan = new Person('Dylan', 'IA', 'Male');

console.log(ayca);
console.log(Person.hasEyes);
suzanne.walk();     // non-static, so can only be accessed by the object
Person.breathe();   // static, so can only be accessed by the classname

// Person.walk();   //TypeError: Person.walk is not a function
// dylan.breathe(); // dylan.breathe is not a function