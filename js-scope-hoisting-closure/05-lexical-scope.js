// Lexical scope

function a(){
    let name = 'John';

    function b(){
        let age = 45;

        console.log(name);  // 'John'
        console.log(age);   // 45
    }
}

// console.log(name);      // Error - name is not defined