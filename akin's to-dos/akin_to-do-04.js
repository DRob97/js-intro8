/*
    Create a class called as Animal
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
    Create a class calleD as Husky, and inherit all the Dog class properties and methods
    Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
    Create 1 function protect
*/

// Try this all with prototypes as well
// Prototypes /////////////////////////////////////////////////////////////////////////////////////////////////////////
function Animal(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

Animal.prototype.eat = function(){
    console.log('EAT');
}
Animal.prototype.run = function(){
    console.log('RUN');
}

function Cat(breed){

    this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.play = function(){
    console.log('PLAY');
}

function Dog(breed){
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.catch = function(){
    console.log('CATCH');
}

function Husky(shed){
    this.shed = shed;
}
Husky.prototype = Object.create(Dog.prototype);
Husky.prototype.protect = function(){
    console.log('HE PROTEC');
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