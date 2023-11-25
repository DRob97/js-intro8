//
class Table{
    constructor(type, material, price){
        this.type = type;
        this.material = material;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }
}

const table1 = new Table('Office', 'Wood', 200);

// Accessing and updating table1 info without getters and setters
console.log(table1.type);
console.log(table1.material);
console.log(table1.price);

table1.price = 300;
console.log(table1.price);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Chair{
    constructor(type, material, price){
        this.type = type;
        this.material = material;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        if(price <= 0) throw new Error('PRICE cannot be zero or less!!!');
        else this.price = price;
    }
}

const chair1 = new Chair('Office', 'Wood', 250);
console.log(chair1.type);
console.log(chair1.material);
console.log(chair1.getPrice());

chair1.setPrice(300);
chair1.price = -300;
console.log(chair1.getPrice());

// PRIVATE FIELDS
class iPhone{
    #brand = 'iPhone';
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        if(price <= 0) throw new Error('PRICE cannot be zero or less!!!');
        else this.price = price;
    }
    getBrand(){
        return this.#brand;
    }
    setBrand(brand){
        this.#brand = brand;
    }
}

const iPhone15 = new iPhone('15', 1000);
console.log(iPhone15);
// console.log(iPhone15.#brand);    // Throws error because the brand is private
console.log(iPhone15.getBrand());

// iPhone15.#brand = 'Samsung';    // Also not allowed
iPhone15.setBrand('Samsung');
console.log(iPhone15.getBrand());