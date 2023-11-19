const batch = '8';
const program = 'Software Engineer in Test';

// Before ES6
const student1 = {
    fName: 'John Doe',
    batch: batch,
    program: program
};

console.log(student1);

// After ES6
const student2 = {
    fName: 'Jane Doe',
    batch,
    program
};

console.log(student2);