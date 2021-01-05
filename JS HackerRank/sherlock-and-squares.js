// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

// FUNCTION DESCRIPTION
// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

// Example
// a = 24
// b = 49

// There are three square integers in the range: 25, 36, 49.  Return 3.

// INPUT FORMAT
// int a: the lower range boundary
// int b: the upper range boundary

// OUTPUT FORMAT
// int: the number of square integers in the range

// SAMPLE INPUT
// 2
// 3 9
// 17 24

// SAMPLE OUTPUT
// 2
// 0

// EXPLANATION

// Test Case #00: In range [3, 9], 4 and 9 are the two square integers.
// Test Case #01: In range [17, 24], there are no square integers.

function squares(a, b) {
  let c = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a));
  return c + 1;
}

// Correct answer also, however time complexity to high
// let count = 0
// for(let i = 1; i <= b; i += 1) {
//     let square = i*i
//     if (square >=a && square <=b) {
//         count ++
//     }
// }
// return count
