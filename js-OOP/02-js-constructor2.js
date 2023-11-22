/*
Create a constructor called Car
and define 4 properties as below
year
make
model
price

Create and add 2 prototype functions to the Car prototype
drive -> {year make model} drives.
stop -> {year make model} stops.
*/
// This is all before ES6
function Car(year, make, model, price){
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
};

Car.prototype.drive = function(){
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
};

Car.prototype.stop = function(){
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
};
/*
Create 3 car objects with below info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000
*/

const car1 = new Car('2023', 'Tesla', 'X', 80000);
const car2 = new Car('2022', 'BMW', 'X7', 60000);
const car3 = new Car('2020', 'Tesla', 'Y', 27000);

/*
Log each car info to the console
Execute drive and stop functions for each car

Get each car's price information in the format -> {year make model} is $ {price}
*/
const cars = [car1, car2, car3];

// Using forEach
cars.forEach(car => {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}`);
    console.log('\n');
});

/*
// Using for...of loop
for(const car of cars){
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}`);
    console.log('\n)
}
*/