//https://www.hackerrank.com/challenges/the-hurdle-race/problem

// FUNCTION DESCRIPTION
// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.

// Example
// height = [1, 2, 3, 3, 2]
// k = 1

// The character can jump 1 unit high initially and must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

// INPUT FORMAT
// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle

// OUTPUT FORMAT
// int: the minimum number of doses required, always 0 or more

// Constraints
// 1 <= n, k <= 100
// 1 <= height[i] <= 100

// Sample Input 0
// 1 6 3 5 2

// Sample Output 0
// 2

// Sample Input 1
// 2 5 4 5 2

// Sample Output 1
// 0

function hurdleRace(k, height) {
  let count = 0;
  for (let i = 0; i <= height.length; i += 1) {
    if (height[i] > k) {
      count++;
      console.log(count);
    }
  }
  return count;
}
// console.log(hurdleRace(7, [2, 5, 4, 5, 2]))
console.log(
  hurdleRace(100, [
    86,
    4,
    83,
    20,
    6,
    81,
    58,
    59,
    53,
    2,
    54,
    62,
    25,
    35,
    79,
    64,
    27,
    49,
    32,
    95,
    100,
    20,
    58,
    39,
    92,
    30,
    67,
    89,
    58,
    81,
    100,
    66,
    73,
    29,
    75,
    81,
    70,
    55,
    18,
    28,
    7,
    35,
    98,
    52,
    30,
    11,
    69,
    48,
    84,
    54,
    13,
    14,
    15,
    86,
    34,
    82,
    92,
    26,
    8,
    53,
    62,
    57,
    50,
    31,
    61,
    85,
    88,
    5,
    80,
    64,
    90,
    52,
    47,
    43,
    40,
    93,
    69,
    70,
    16,
    43,
    7,
    25,
    99,
    12,
    63,
    99,
    71,
    76,
    55,
    17,
    90,
    43,
    27,
    20,
    42,
    84,
    39,
    96,
    75,
    1,
  ])
); //47
