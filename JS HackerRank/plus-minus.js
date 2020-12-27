// https://www.hackerrank.com/challenges/plus-minus/problem

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

// EXAMPLE
// arr = [1, 1, 0, -1, -1]
// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000,  and 1/5 = 0.200000. Results are printed as:
// 0.400000
// 0.400000
// 0.200000

// FUNCTION DESCRIPTION

// plusMinus has the following parameter(s):
// int arr[n]: an array of integers

// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

// INPUT FORMAT
// The first line contains an integer, n, the size of the array.
// The second line contains n space-separated integers that describe arr[n].

// Constraints
// 0 < n <= 100
// -100 <= arr[i] <= 100

// OUTPUT FORMAT
// Print the following  lines, each to  decimals:
// proportion of positive values
// proportion of negative values
// proportion of zeros

// SAMPLE INPUT
// 6
// -4 3 -9 0 4 1

// SAMPLE OUTPUT
// 0.500000
// 0.333333
// 0.166667

// EXPLANATION
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros:1/6 = 0.166667.

function plusMinus(arr) {
  let pos = [];
  let neg = [];
  let zero = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else if (arr[i] == 0) {
      zero.push(arr[i]);
    } else pos.push(arr[i]);
  }
  console.log((pos.length / arr.length).toFixed(6));
  console.log((neg.length / arr.length).toFixed(6));
  console.log((zero.length / arr.length).toFixed(6));
}
