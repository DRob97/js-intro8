// try catch
try{
    const pi = 3.14;
    pi = 2;
    console.log(pi);
} catch(error){
    console.error('An error occured');
} finally{
    console.log('Pass or fail, I will always be here');
}

// throwing errors
function getName(name){
    if (name && typeof name === 'string') {
        console.log('Hello ' + name);
    } else {
        throw new Error('Invalid name!');
    }
}

getName('Michael');
try{
    getName(false);
} catch(error){
    console.error('Invalid name.')
}