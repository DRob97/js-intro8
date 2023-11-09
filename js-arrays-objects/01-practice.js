const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    exam_scores:  {
        midterm: 60,
        final: 90
    }
};

console.log(student);

console.log(student.hobbies);
console.log(student['exam_scores']);
console.log(student.hobbies[0]);

let average = (student.exam_scores.midterm + student.exam_scores.final) / 2;
console.log(`The average of the exam scores is ${average}.`);

// This is a dynamic way to code the above two lines
const exam_results = Object.values(student.exam_scores);
let sum = 0;
for(const result of exam_results){
    sum += result;
}
console.log(sum / exam_results.length);

/*
Create an array of books that stores 3 books information
Stefan Zweig - Amok - Novella
Orhan Pamuk - My Name Is Red - Historical Novel
George Orwell - 1984 - Dystopian Literature
*/

const books = [
    {
        name: 'Amok',
        author: {
            firstName: 'Stefan',
            lastName: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            firstName: 'Orhan',
            lastName: 'Pamuk',
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            firstName: 'George',
            lastName: 'Orwell',
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where the Author's name contains an 'a' or 'A'
let withAn_A = 0;
for(const book of books){
    if(book.author.firstName.toLowerCase().includes('a')) withAn_A++;
    // else if(book.author.lastName.toLowerCase().indexOf('a') >= 0) withAn_A++;
}

console.log(withAn_A);