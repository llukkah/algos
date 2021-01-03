// https://www.hackerrank.com/challenges/apple-and-orange/problem

// FUNCTION DESCRIPTION
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// INPUT FORMAT
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// OUTPUT FORMAT
// Print two integers on two different lines:
// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.

// SAMPLE INPUT
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// SAMPLE OUTPUT
// 1
// 1

// EXPLANATION
// The first apple falls at position 5 - 2 = 3.
// The second apple falls at position 5 + 2 = 7.
// The third apple falls at position 5 + 1 = 6.
// The first orange falls at position 15 + 5 = 20.
// The second orange falls at position 15 - 6 = 9.
// Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
// Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // s: integer, starting point of Sam's house location.
  // 7
  // t: integer, ending location of Sam's house location.
  // 11
  // a: integer, location of the Apple tree.
  // 5
  // b: integer, location of the Orange tree.
  // 15
  // apples: integer array, distances at which each apple falls from the tree. -2 2 1
  // oranges: integer array, distances at which each orange falls from the tree.5 -6
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i += 1) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i += 1) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
