// Getters and Setters

class Phone{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    calls(){
        console.log('CALL');
    }

    getPrice(pass){
        if(pass === 'TechGlobal') return this.price;
        else throw new Error('PASSWORD IS INCORRECT!!!');
    }
    setPrice(newPrice){
        if(newPrice < 0) throw new Error('PRICE CANNOT BE SET TO NEGATIVE!!!');
        else this.price = newPrice;
    }
}

const phone1 = new Phone('iPhone', 1000);
const phone2 = new Phone('Samsung', 800);

phone2.setPrice(850);

console.log(phone1.getPrice('TechGlobal'));
console.log(phone2.getPrice('TechGlobal'));