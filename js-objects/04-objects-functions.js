const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullName: function () {
        return `${this.first_name} ${this.last_name}`;
    },
    info: function() {
        return `${this.fullName()} was born in ${this.date_of_birth}.`;
    }
    
};

console.log(person.date_of_birth);  // 1790
console.log(person.fullName());

/*
Create a new function as a property for the person called info()
The function should return:
    Adam Smith was born in 1790.
*/
/*
person.info = function(){
    return `${this.fullName()} was born in ${this.date_of_birth}.`;
}
*/
console.log(person.info());