const {appURL, login, username, password} = require('./amazonGlobalInfo');

console.log(username, password, appURL);
login(username, password);
// Write your code to validate the user can purchase products
