// https://www.hackerrank.com/challenges/mini-max-sum/problem

// FUNCTION DESCRIPTION
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1, 3, 5, 7, 9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints 16 24.

// INPUT FORMAT
// arr: an array of 5 integers

// OUTPUT FORMAT
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// SAMPLE INPUT
// 1 2 3 4 5

// SAMPLE OUTPUT
// 10 14

function miniMaxSum(arr) {
  // arr.length = 5
  // let minSet = sortedArray.slice(0,-1)
  // let maxSet = sortedArray.slice(1)
  let sortedArray = arr.sort();
  const sum = sortedArray.reduce((a, total) => a + total, 0);
  // minSum = sum - sortedArray[sortedArray.length - 1]
  // maxSum = sum - sortedArray[0]
  console.log(sum - sortedArray[sortedArray.length - 1], sum - sortedArray[0]);
}
