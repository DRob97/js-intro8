for(let i = 1; i <=3; i++){
    console.log(i);
    for(let j = 1; j <=5; j++){
        console.log('\t' + j);
    }
}

for(let i = 1; i <=3; i++){
    for(let j = 1; j <=5; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

// With for
const studentGroups = [
    ['Alex', 'Max', 'Jane'],
    ['John', 'James'],
    ['Ryan', 'Tom']
];

for(let i = 0; i < studentGroups.length; i++){
    // console.log(studentGroups[i]);
    for(let j = 0; j < studentGroups[i].length; j++)
    console.log(studentGroups[i][j]);
}

// With for...of
studentGroups = [
    ['Alex', 'Max', 'Jane'],
    ['John', 'James'],
    ['Ryan', 'Tom']
];

for(const group of studentGroups){
    // console.log(group);
    for(const student of group){
        console.log(student);
    }
}