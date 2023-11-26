/*
Login function:
    1. enter your username and password and click login button
    2. validation happens behind the scenes
    3. logged in
*/

function enterCreds(){
    console.log('Credentials entered!');
}

function valdateCreds(clFunction){
    setTimeout(() => {
        console.log('Credentials are validated!');
        clFunction();
    }, 2000);
}

function login(){
    console.log('You are logged in!');
}
/*
enterCreds();
valdateCreds();
login();
*/

enterCreds();
valdateCreds(() => {
    login();
});