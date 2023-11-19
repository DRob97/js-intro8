// THIS IS NOT AN ES6 FEATURE

function combineStrings(str1, str2){
    if(arguments[0] !== undefined && arguments[1] !== undefined) console.log(arguments[0] + arguments[1]);
    //if(typeof str1 === 'string' && typeof str2 === 'string') console.log(str1 + str2);
    // else throw new Error('One or more of the arguments is not a string');
    else console.error('One or more of the arguments is not a string');
}

combineStrings('Java', 'Script');       // JavaScript
combineStrings('Java');                 // Javaundefined
combineStrings();                       // NaN