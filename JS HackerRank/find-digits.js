// https://www.hackerrank.com/challenges/find-digits/problem

// An integer d is a divisor of an integer n if the remainder of n / d = 0.

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

//EXAMPLE
// n = 124
// Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.

//n = 10
// Check whether 1 and 0 are divisors of 10. 1 is, but 0 is not. Return 1.

// FUNCTION DESCRIPTION
// Complete the findDigits function in the editor below.

// findDigits has the following parameter(s):
// int n: the value to analyze

// RETURNS
// int: the number of digits in n that are divisors of n.

// INPUT FORMAT
// n = integer to examine.

function findDigits(n) {
  let digitArray = n.toString();
  let count = 0;
  for (let i = 0; i <= digitArray.length; i += 1) {
    if (n % digitArray[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(1012)); // 3
console.log(findDigits(124)); // 3
console.log(findDigits(12)); // 2
