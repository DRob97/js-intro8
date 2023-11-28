/*
// Try/catch error template
console.log('*** An error occurred:\n', err, '\n');
*/

try{
    const pi = 3.14;
pi = 2; // TypeError: Assignment to constant variable.
console.log(pi);
} catch(err){
    console.log('*** An error occurred:\n', err, '\n');
}

try{
    console.log('Hello World');
} catch(err){
    console.log('*** An error occurred');
}

try{
    // this will try to run
    console.log('Hello World!');
} catch(err){
    // this will run only if there is an error occurrence
    console.log('*** An error occurred:\n', err, '\n');
} finally{
    // this will run regardless of error occurrence
    console.log('I am here no matter what!')
}