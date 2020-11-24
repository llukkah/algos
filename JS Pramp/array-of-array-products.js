//////////////////////////////////////////////////////
/////////////// Array of Array Products ///////////////
//////////////////////////////////////////////////////

// Given an array of integers arr, you're asked to calculate //
// for each index i the product of all integers except the   //
// integer at that index (i.e. except arr[i]). Implement a   //
// function arrayOfArrayProducts that takes an array of      //
// integers and returns an array of the products.           //

// Solve without using division and analyze your solution's //
// time and space complexities.                             //

// Examples:
// input:  arr = [8, 10, 2]
// output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

// input:  arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

// Constraints:
// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 20
// [output] array.integer


//PSEUDOCODE
//loop through input to find i
//find product of all indexes except current index
//return array of integers

function arrayOfArrayProducts(arr) {
let result = [];
let product = 1;
for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
            continue;
        }
        product = product*arr[j]
        result.push(product)
    }
    return result
}
}

console.log(arrayOfArrayProducts([8, 10, 2])) // output - 20, 16, 80