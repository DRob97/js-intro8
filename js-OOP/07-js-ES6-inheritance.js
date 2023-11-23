// ES6 inheritance

// Parent class
class Person{
    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }
    eat(){
        console.log('EAT');
    }
    sleep(){
        console.log('SLEEP');
    }
    walk(){
        console.log('WALK');
    }
}

// Inherit all the Person properties and functions to Singer
class Singer extends Person{
    constructor(fullName, age, groupName){
        super(fullName, age);       // Invoking parent constructor to assign fullName and age
        this.groupName = groupName;
    }
    sing(){
        console.log('SING');
    }
}

// Inherit all the Person properties and functions to Programmer
class Programmer extends Person{
    constructor(fullName, age, companyName){
        super(fullName, age);
        this.companyName = companyName;
    }
    code(){
        console.log('CODE');
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const person1 = new Person('John Doe', 25);
const singer1 = new Singer('Jane Doe', 20, 'Pink');
const programmer1 = new Programmer('Alex Smith', 30, 'Apple');

person1.eat();
singer1.sleep();
programmer1.walk();

singer1.sing();
programmer1.code();