
function takeDLExam(){
    console.log('Joining exam');
}

function testAge(cbfnForSuccess, cbfnForFailure){
    setTimeout(() => {
        const age = Math.floor(Math.random() * 30);
        console.log(`Applicant is ${age} years old.`);
        if(age >= 16){
            cbfnForSuccess();
        }
        else cbfnForFailure();
    }, 2000);
}

testAge(() => {
    takeDLExam();
}, () => {
    console.log('ERROR: You cannot join the exam');
});