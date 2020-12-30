// https://www.hackerrank.com/challenges/picking-numbers/problem

// FUNCTION DESCRIPTION
// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// Example
// a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
// There are two subarrays meeting the criterion:  [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

// INPUT FORMAT
// int a[n]: an array of integers

// OUTPUT FORMAT
// int: the length of the longest subarray that meets the criterion

// SAMPLE INPUT
// 4 6 5 3 3 1

// SAMPLE OUTPUT
// 3

// EXPLANATION
// We choose the following multiset of integers from the array: {4, 3, 3}. Each pair in the multiset has an absolute difference  <= 1 (i.e., |4 - 3| and |3 - 3| = 0), so we print the number of chosen integers, 3, as our answer.

pickingNumbers = (arr) => {
  let sorted = a.sort((a, b) => a - b);
  let counter = 0;
  let max = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] <= 1) {
      counter += 1;
    }
    if (counter > max) {
      max = counter;
    }
  }
  return max;
};

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
