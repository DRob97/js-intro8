// Run this code in debug mode
function findLargestNumber(nums){
    let largest = 0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        //debugger;
        if(num > largest) largest = num;
    }
    return largest;
}

const numbers = [8, 9, 1, 0, 42, 4];
console.log(findLargestNumber(numbers));

/*
Either use debuggers;
or set breakpoint right inside vscode (red dot)
*/