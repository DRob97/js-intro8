// properties - information
module.exports.username = 'johndoeX';
module.exports.password = 'test1234';
module.exports.appURL = 'www.amazon.com';

// functions
module.exports.login = (username, password) => {
    console.log(`This will login with ${username} and ${password}`);
}

//
class ExpectedTexts{
    static title = 'Amazon.com. Spend less. Smile more.';
    static searchPlaceHolder = 'Search Amazon';
}

module.exports.ExpectedTexts = ExpectedTexts;