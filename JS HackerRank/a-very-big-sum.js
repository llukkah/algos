//https://www.hackerrank.com/challenges/a-very-big-sum/problem

// FUNCTION DESCRIPTION
// aVeryBigSum has the following parameter(s):
// int ar[n]: an array of integers .

// RETURN
// long: the sum of all array elements

// INPUT FORMAT
// The first line of the input consists of an integer n.
// The next line contains n space-separated integers contained in the array.

// OUTPUT FORMAT
// Return the integer sum of the elements in the array.

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
