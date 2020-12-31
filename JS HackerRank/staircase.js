// https://www.hackerrank.com/challenges/staircase/problem

// FUNCTION DESCRIPTION
// Staircase detail
// This is a staircase of size n = 4 :
//    #
//   ##
//  ###
// ####

// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// INPUT FORMAT
// int n: an integer

// OUTPUT FORMAT
// Print a staircase of size n using # symbols and spaces.
// Note: The last line must have 0 spaces in it.

// Sample Input
// 6

// Sample Output
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Explanation
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6 .

function staircase(n) {
  for (let i = 0; i < n; i++) {
    // note: join() requires a minimum
    //   of 2 array elements to have any effect
    var spaces = new Array(n - i).join(" ");
    var hashes = new Array(2 + i).join("#");
    console.log(spaces + hashes);
  }
}
