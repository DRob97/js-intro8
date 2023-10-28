/*
    Car
        color = black
        year = 2020
        price = 20,000
        make = Toyota
        model = Camry


Not preferred:
let carColor = "black";
let carYear = 2020;
let carPrice = 20000;
let carMake = "Toyota";
let carModel = "Camry";

*/

const car = {
    color: "black",
    year: 2020,
    price: 20000,
    make: "Toyota",
    model: "Camry"    
            };

// How to output an object
console.log(car);

// How to access a specific information about the object, like car's model
console.log(car.model);
console.log(car["model"]);

// How to update an existing value, like price or color
car.color = "Orange";
car["price"] = 22000;
console.log(car);

// Adding additional info to an object - milage or body style
car.bodyStyle = "Sedan";
car["milage"] = 33000;

console.log(car);

// How to remove a property or key-value from an object
delete car.price;
delete car["milage"];

console.log(car);
