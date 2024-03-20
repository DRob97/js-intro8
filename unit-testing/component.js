function sum(arr){
    return arr.reduce((total, current) => total + current, 0);
}

// console.log(sum([1, 2, 3]));
export default sum;