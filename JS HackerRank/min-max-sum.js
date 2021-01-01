// https://www.hackerrank.com/challenges/mini-max-sum/problem





function miniMaxSum(arr) {
// arr.length = 5
// let minSet = sortedArray.slice(0,-1)
// let maxSet = sortedArray.slice(1)
let sortedArray = arr.sort()
const sum = sortedArray.reduce((a, total) => a + total, 0);
// minSum = sum - sortedArray[sortedArray.length - 1]
// maxSum = sum - sortedArray[0]
console.log(sum - sortedArray[sortedArray.length - 1], sum - sortedArray[0]);
}
