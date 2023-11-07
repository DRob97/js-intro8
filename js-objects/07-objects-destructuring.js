// Array destructuring

const colors = ['red', 'purple', 'orange'];

const [firstColor, secondColor, thirdColor] = colors;       // Destructuring

console.log(firstColor);

for(const letter of secondColor){
    console.log(letter);
}

console.log(thirdColor.split(''));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object destructuring

const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago'
};

const {username, password, email} = user;

console.log(username);
console.log(password);
console.log(email);