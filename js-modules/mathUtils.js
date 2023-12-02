const getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;  // can put module.exports at the beginning of this instead of const to immediately export it

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const averageOfTwo = (x, y) => (x + y) / 2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sumOfTwo = (x, y) => x + y;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// module.exports.getRandomNumber = getRandomNumber;
// module.exports.averageOfTwo = averageOfTwo;
// module.exports.sumOfTwo = sumOfTwo;

// const math = {
//     getRandomNumber,
//     averageOfTwo,
//     sumOfTwo
// };

// module.exports.math = math;

// Another way of exporting with objects
module.exports = {  // This allows you to create a custom name for this object when you import it, unique to that file
    getRandomNumber,
    averageOfTwo,
    sumOfTwo
};