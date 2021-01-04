// https://www.hackerrank.com/challenges/kangaroo/problem

// FUNCTION DESCRIPTION
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2, x2 + v2 = 1 + 2), so our answer is YES.

// INPUT FORMAT

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// OUTPUT FORMAT
// Print YES if they can land on the same location at the same time; otherwise, print NO.
// Note: The two kangaroos must land at the same location after making the same number of jumps.

// SAMPLE INPUT
// 0 3 4 2

// SAMPLE OUTPUT
// YES

function kangaroo(x1, v1, x2, v2) {
  // let result = (x1-x2) % (v2-v1);
  if ((x2 > x1 && v2 >= v1) || (x1 - x2) % (v2 - v1) != 0) return "NO";
  else return "YES";
}
