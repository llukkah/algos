// https://www.hackerrank.com/challenges/utopian-tree/problem

//FUNCTION DESCRIPTION
// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?

// For example, if the number of growth cycles is n = 5, the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

//INPUT FORMAT
// int n: the number of growth cycles to simulate

// OUTPUT FORMAT
// int: the height of the tree after the given number of cycles

// Sample Input
// 3
// 0
// 1
// 4

// Sample Output
// 1
// 2
// 7

// Explanation
// There are 3 test cases.

// In the first case (n = 0), the initial height (h = 1) of the tree remains unchanged.

// In the second case (n = 1), the tree doubles in height and is 2 meters tall after the spring cycle.

// In the third case (n = 4), the tree doubles its height in spring (n = 1, h = 2), then grows a meter in summer (n = 2, h = 3), then doubles after the next spring (n = 3, h = 6), and grows another meter after summer (n = 4, h = 7). Thus, at the end of 4 cycles, its height is 7 meters.

// PSUEDOCODE
// ---------
// spring growth = 1 gc
// summer growth = 1 gc
// spring + summer = 2 gc
// if n odd is an number it will return after a spring cycle 
// if n is an even number return after a summer cycle

function utopianTree(n) {
  let growth = 1;
  for (let i = 0; i < n; i++) {
    let spring = growth * 2;
    let summer = spring + 1;
    growth = summer;
    i++;
  }
  if (n % 2 !== 0) {
    return growth - 1;
  } else {
    return growth;
  }
}
console.log(utopianTree(4));
