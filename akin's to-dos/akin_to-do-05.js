

// Create a class called as Student
class Student{
    // Create a constructor with these properties:
        // fName, lName, age, gender, area of study (className)
    static numberOfStudents = 0;
    constructor(fName, lName, age, gender, className){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
        this.className = className;
        Student.numberOfStudents++;
    }
}

// Create a new class called MathStudent and inherit from Student
class MathStudent extends Student{
    static numberOfMathStudents = 0;
    // Create a 5 argument constructor that chains super calss constructor
    constructor(fName, lName, age, gender, className){
        super(fName, lName, age, gender, className);
        MathStudent.numberOfMathStudents++;
    }
}

// Create a class called ScienceStudent and inherit from Student
class ScienceStudent extends Student{
    static numberOfScienceStudents = 0;
    // Create a 5 argument constructor that chains super calss constructor
    constructor(fName, lName, age, gender, className){
        super(fName, lName, age, gender, className);
        ScienceStudent.numberOfScienceStudents++;
    }
}

// Create Student object, MathStudent object, or Science Student object
/*
// Create the following student objects:
    // MathStudent -> John Doe, 23, M, Math
    // MathStudent -> Alex Smith, 30, M, Math
    // MathStudent -> Jane Doe, 17, F, Math

    // ScienceStudent -> James Morgan, 21, M, Science
*/
console.log(Student.numberOfStudents);

const student1 = new MathStudent('John', 'Doe', 23,'M', 'Math');
const student2 = new MathStudent('Alex', 'Smith', 30,'M', 'Math');
const student3 = new MathStudent('Jane', 'Doe', 17,'F', 'Math');
const student4 = new ScienceStudent('James', 'Morgan', 21,'M', 'Science');

console.log(Student.numberOfStudents);
console.log('\n');
// Print information of each student
const students = [student1, student2, student3, student4];
/*
for(const student of students){
    console.log(student);
}
*/
// students.forEach(student => console.log(student));
/*
Find how many students are male                                 // 3
Find how many students are female                               // 1
Find how many students are taking math                          // 3
Find how many students are taking science                       // 1
Find the oldest student                                         // Alex Smith is the oldest with the age of 30
Find the youngest student                                       // Jane Doe is the youngest with the age of 17  Reduce
Find the average age of the students                            // 91/4                                         Reduce
Find and return the full name of students who take math         // [John Doe, Alex Smith, Jane Doe]             Filter & Map
Find and return the first name of students who are male         // [John, Alex, James]                          Filter & Map
Find and return the last name of all students who are over 20   // [Doe, Smith, Morgan]                         Filter & Map
*/

console.log(students.reduce((result, curr) => curr.gender === 'M' ? result + 1 : result, 0));
console.log(students.reduce((result, curr) => curr.gender === 'F' ? result + 1 : result, 0));

console.log(students.filter(student => student.className === 'Math').length);   // Change to reduce
console.log(students.filter(student => student.className === 'Science').length);    // Change to reduce

const oldestWithReduce = students.reduce((oldest, student) => oldest.age > student.age ? oldest : student, students[0]);
console.log(`${oldestWithReduce.fName} ${oldestWithReduce.lName} is the oldest with the age of ${oldestWithReduce.age}`);

const youngestWithReduce = students.reduce((youngest, student) => youngest.age < student.age ? youngest : student, students[0]);
console.log(`${youngestWithReduce.fName} ${youngestWithReduce.lName} is the youngest with the age of ${youngestWithReduce.age}`);

console.log(students.reduce((total, student) => student.age > 0 ? total + student.age : total, 0) / students.length);

