// Create an object called 'student1' with the following information:
/*
    fName: 'John',
    lName: 'Doe',
    age: 25

*/
/*
const student1 = {
    fName: 'John',
    lName: 'Doe',
    age: 25
};
// More students:
const student2 = {
    fName: 'Jane',
    lName: 'Doe',
    age: 23
};

const student3 = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30
};

const student4 = {
    fName: 'Morgan',
    lName: 'Smith',
    age: 19
};
*/
// Above section is inefficient
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a template and use it to create many objects
// Constructor is a special function that allows you to create many similar objects
function Student(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
};

// Adding a function to your prototype
Student.prototype.study = function(){
    console.log(`${this.fName} ${this.lName} studies.`);
}

// Create and add a new prototype function called getAge which logs: {fullName}'s age is {age};

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Jane', 'Doe', 23);
const student3 = new Student('Alex', 'Smith', 30);
const student4 = new Student('Morgan', 'Smith', 19);
const student5 = new Student('James', 'Smith', 35);

console.log(student3);
console.log(student5.lName);

student2.study();

Student.prototype.getAge = function(){
    console.log(`${this.fName} ${this.lName}'s age is ${this.age}.`);
}

student2.getAge();
student4.getAge();
// Constructor - prototype/blueprint/template
// Create 3 teacher objects with the proper information
function Teacher(fName, lName, age, field){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.field = field;
}

const teacher1 = new Teacher('Kyle', 'Barshinger', 32, 'Music');
const teacher2 = new Teacher('Brie', 'Shadensack', 100, 'English');
const teacher3 = new Teacher('Brian', 'Luptak', 47, 'P.E.');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// What teacher does -> teach() and giveHomework(). {fName} teaches. {fName} gives homework

// Oldest teacaher -> David
// Youngest student -> Morgan
// Count the students with the last name Smith -> 3
// Count the students with the first name having letter 'a' ignoring cases -> 4

const teachers = [teacher1, teacher2, teacher3];
const students = [student1, student2, student3, student4, student5];