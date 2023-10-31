const top3Movies = ['Lord of The Rings', 'Rocky', 'Star Wars'];

/*
const favMovie = top3Movies[0];
const secondFavMovie = top3Movies[1];
const thirdFavMovie = top3Movies[2];
*/

// Instead of the above 3 lines, you can use destructuring array feature as below

const [favMovie, secondFavMovie, thirdFavMovie] = top3Movies;

console.log(favMovie);          // Lord of The Rings
console.log(secondFavMovie);    // Rocky
console.log(thirdFavMovie);     // Star Wars

console.log(`My favorite movie is ${favMovie}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 10, 2, 7, 13, 20];

// Destructure index of second, thrid, and fourth numbers
const [ , second, third, fourth, , ] = numbers;
console.log(second);
console.log(third);
console.log(fourth);