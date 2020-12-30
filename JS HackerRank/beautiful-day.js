// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

// FUNCTION DESCRIPTION
// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days,[i...j]  and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

// INPUT FORMAT
// int i: the starting day number
// int j: the ending day number
// int k: the divisor

// OUTPUT FORMAT
// int: the number of beautiful days in the range

// SAMPLE INPUT
// 20 23 6

// SAMPLE OUTPUT
// 2

function beautifulDays(i, j, k) {
  let arr = []; // [20, 21,22,23]
  for (let m = i; m <= j; m++) {
    arr.push(m);
  }

  let rev = []; // [ '02', '12', '22', '32' ]
  for (let n = 0; n < arr.length; n++) {
    rev.push(arr[n].toString().split("").reverse().join(""));
  }

  let beautifulDayCount = 0;

  for (let d = 0; d < arr.length; d++) {
    let difference = Math.abs(arr[d] - rev[d]);
    if (difference % k === 0) {
      beautifulDayCount += 1;
    }
  }
  return beautifulDayCount;
}

console.log(beautifulDays(20, 23, 6));
