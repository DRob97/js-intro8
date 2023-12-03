export class MathHelper{
    static pi = 3.14;

    static getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
    static sum = (...args) => {
        return args.reduce((sum, curr) => sum + curr, 0);
    };
    static product = (...args) => {
        return args.reduce((product, curr) => product * curr, 1);
    };
}

// console.log(MathHelper.sum(3, 5));
// console.log(MathHelper.sum(3, 5, 10));
// console.log(MathHelper.sum(3, 5, 10, 2));
// console.log('\n');
// console.log(MathHelper.product(3, 5));
// console.log(MathHelper.product(3, 5, 10));
// console.log(MathHelper.product(3, 5, 10, 2));