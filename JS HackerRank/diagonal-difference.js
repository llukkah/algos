// https://www.hackerrank.com/challenges/diagonal-difference/problem

// FUNCTION DESCRIPTION
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// INPUT FORMAT
// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

// OUTPUT FORMAT
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// SAMPLE INPUT
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// SAMPLE OUTPUT
// 15

// EXPLANATION
// The primary diagonal is:
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < arr.length; i += 1) {
    firstDiagonal += arr[i][i];
    let j = arr.length - i;
    secondDiagonal += arr[i][j - 1];
  }
  // return firstDiagonal
  let diagonal = firstDiagonal - secondDiagonal;
  let result = Math.abs(diagonal);
  return result;

  // return result
  //     arr[0][0]
  //     arr[1][1]
  //     arr[2][2]

  //     arr[0][2]
  //     arr[1][1]
  //     arr[2][0]

  // i = 0 length = 3 length-[i] = 2
  // i = 1 length = 3 length-[i] = 1
  // i = 2 length = 3 length-[i] = 0
}
