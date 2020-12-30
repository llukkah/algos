//https://www.hackerrank.com/challenges/sock-merchant/problem

// FUNCTION DESCRIPTION
// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// INPUT FORMAT
// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock

// OUTPUT FORMAT
// Return the total number of matching pairs of socks that Alex can sell.

// Sample Input
// 9
// 10 20 20 10 10 30 50 10 20

// Sample Output
// 3

// PSEUDOCODE
// set a count for how many pairs
// sort array
// for loop to iterate through array
// check if ar[i] is the same as the next one over.
// if it is, continue and count plus 1.
// if not, continue anyway

function sockMerchant(n, ar) {
  let count = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      count += 1;
    }
  }
  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
