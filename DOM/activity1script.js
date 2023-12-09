const userName = window.prompt('Please enter your name:');
    if(userName){
        window.alert('Welcome ' + userName);
        const cont = window.confirm('Would you like to continue?');
        if(cont){
            window.alert('You have chosen to continue');
            console.log('innerHeight', innerHeight);
            console.log('innerWidth', innerWidth);
            setTimeout(() => {
                window.location.reload();
            }, 10000);
        }
        else{
            window.alert('You have canceled the action');
        }
    }
    else{
        window.alert('Bye bye!');
    }