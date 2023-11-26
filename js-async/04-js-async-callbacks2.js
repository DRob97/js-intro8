/*
Assume you fetching data from an external source with the steps below
1. Connect to external source
2. Fetch the data
3. Use data for your script

but assume that;
connecting takes 5 seconds
fetching takes 3 seconds
processing takes 1 second
*/

function connectToDB(event){
    setTimeout(() => {
        console.log('CONNECTED TO DB!');
        event();
    }, 5000);
}

function fetchData(event){
    setTimeout(() => {
        console.log('DATA RETRIEVED!');
        event();
    }, 3000);
}

function processData(){
    setTimeout(() => {
        console.log('DATA USED!');
    }, 1000);
}

connectToDB(() => {
    fetchData(() => {
        processData();
    });
});