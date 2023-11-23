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

const teacher1 = new Teacher('David', 'Doe', 98, 'Scuba Instructor');
const teacher2 = new Teacher('Arnold', 'schwarzenegger', 76, 'Gym');
const teacher3 = new Teacher('Bowser', 'Junior', 13, 'Art');

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

Teacher.prototype.teach = function(){
    console.log(`${this.fName} ${this.lName} teaches.`);
}

Teacher.prototype.giveHomework = function(){
    console.log(`${this.fName} ${this.lName} gives homework.`);
}
/*
function oldestTeacher(arr){
    const oldest = {
        fName: '',
        age: 0
    };
    for(const teacher of arr){
        if(teacher.age > oldest.age){
            oldest.fName = teacher.fName;
            oldest.age = teacher.age;
        }
    }
    return oldest.fName;
}

console.log(oldestTeacher(teachers))

function youngestStudent(arr){
    const youngest = {
        fName: '',
        age: Infinity
    };
    for(const student of arr){
        if(student.age < youngest.age){
            youngest.fName = student.fName;
            youngest.age = student.age;
        }
    }
    return youngest.fName;
}

console.log(youngestStudent(students));

function lastNameSmith(arr){
    let smithCounter = 0;
    for(const student of arr){
        if(student.lName === 'Smith') smithCounter++;
    }
    return `The number of students with the last name 'Smith' is ${smithCounter}`;
}

console.log(lastNameSmith(students));

function fNameIncludesA(arr){
    let aCounter = 0;
    for(const student of arr){
        if(student.fName.toLowerCase().includes('a')) aCounter++
    }
    return `The number of students whose first name includes 'a' is ${aCounter}`;
}

console.log(fNameIncludesA(students));
*/
// Akin's soultions

// Akin's solution
const oldestTeacher = teachers.reduce((oldest, curr) => oldest.age > curr.age ? oldest : curr, {});
console.log(oldestTeacher.fName);
// Akin's solution
const youngestStudent = students.reduce((youngest, curr) => youngest.age < curr.age ? youngest : curr, {});
console.log(youngestStudent.fName);
// Akin's solution
console.log(students.filter(student => student.lName === 'Smith').length);  // Filter, 3
console.log(students.reduce((counter, curr) => curr.lName === 'Smith' ? counter + 1 : counter, 0)); // Reduce, 3
// Akin's solution
console.log(students.filter(student => student.fName.toLowerCase().includes('a')).length);  // Filter, 4
console.log(students.reduce((counter, curr) => curr.fName.toLowerCase().includes('a') ? counter + 1 : counter, 0)); // Reduce, 4

