/*
    Create a class calles as Animal
    Create a constructor which takes 'name', 'age', 'color'
    Create 2 functions eat(), run()

    THEN
    Create a class called as Cat, which inherits all the Animal class properties and methods
    Create a constructor which takes 'name', 'age', 'color', and 'breed'
    Create 1 function play()

    Create a class called as Dog and inherit all the Animal class properties and methods
    Create a constructor which takes 'name', 'age', 'color', and 'breed'
    Create 1 function catch()

    THEN
    Create a class calles as Husky, and inherit all the Dog class properties and methods
    Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
    Create 1 function protect
*/

// Try this all with prototypes as well
// Classes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Animal{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    eat(){
        console.log('EAT');
    }
    run(){
        console.log('RUN');
    }
}

class Cat extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color);
        this.breed = breed;
    }
    play(){
        console.log('PLAY');
    }
}

class Dog extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color);
        this.breed = breed;
    }
    catch(){
        console.log('CATCH');
    }
}

class Husky extends Dog{
    constructor(name, age, color, breed, shed){
        super(name, age, color, breed);
        this.shed = shed;
    }
    protect(){
        console.log('HE PROTEC');
    }
}

const mouse = new Animal('Jerry', 7, 'Brown');
const cat = new Cat('Tom', 4, 'Gray', 'Maine Coon');
const dog = new Dog('Spike', 6, 'Light Gray', 'Bulldog');
const hsky = new Husky('Tyke', 1, 'Black', 'Husky', 'Sheds');

console.log(mouse);
console.log(cat);
console.log(dog);
console.log(hsky);

mouse.eat();
cat.eat();
dog.eat();
hsky.eat();
mouse.run();
cat.run();
dog.run();
hsky.run();
cat.play();
dog.catch();
hsky.catch();
hsky.protect();