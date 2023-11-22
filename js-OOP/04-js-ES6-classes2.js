/*
Create a class called Cat
Create a constructor which takes below info and defines template to create many objects from the class
name, color, age

Create 3 functions as below:
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'
*/
class Cat{                          // Classes are also known as blueprints or templates
    constructor(name, color, age){  // This constructor creates objects, or more specifically it (next line)
        this.name = name;           // it instances instances
        this.color = color;
        this.age = age;
    }
    makesSound(){
        console.log('MEOW');
    }
    eat(){
        console.log('EAT');
    }
    sleep(){
        console.log('SLEEP');
    }
}

// Creating objects from the Cat class
// cat1 -> Simba, Orange, 1
// cat2 -> Lucy, White, 2
// cat3 -> Oliver, Brown, 3

const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);

const cats = [cat1, cat2, cat3];

for(const cat of cats){
    console.log(cat);
    cat.makesSound();
    cat.eat();
    cat.sleep();
    console.log('\n');
}

// Store all the cat names in an array
console.log(cats.map(cat => cat.name));
console.log(cats.filter(cat => cat.age > 1).map(cat => cat.name));