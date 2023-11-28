function getName(name){
    if(name && typeof name === 'string') console.log('Thanks', name);
    else throw new Error('That\'s not a name');
}

getName('John');
// All of the following will throw the same custom error
try{
    getName('');
    getName(null);
    getName(undefined);
    getName(123);
    getName(true);
} catch(err){
    console.log('It is not a proper name!!!');
} finally{
    console.log('Goodnight guys; the topic is done!');
}