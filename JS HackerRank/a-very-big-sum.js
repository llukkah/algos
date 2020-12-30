// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// FUNCTION DESCRIPTION
// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// RETURN
// long: the sum of all array elements

// INPUT FORMAT
// int ar[n]: an array of integers .

// OUTPUT FORMAT
// long: the sum of all array elements

// CONSTRAINTS
// 1 <= n <= 10
// 0 <= ar[i] <= 10^10

// SAMPLE INPUT
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005

// SAMPLE OUTPUT
// 5000000015
function aVeryBigSum(ar) {
  let result = ar.reduce((sum, num) => {
    return sum + num;
  });

  return result;
}
