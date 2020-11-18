// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C . Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// Example
// x = 2
// y = 5
// z = 4
// The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4. Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.


// Input Format
// Three space-separated integers describing the respective values of:
// x (cat A's location)
// y (cat B's location) 
// z (mouse C's location)

// Sample Input
// 1 2 3
// 1 3 2

// Sample Output
// Cat B
// Mouse C

// Returns
// string: Either 'Cat A', 'Cat B', or 'Mouse C'

//PSEUDOCODE
//check the absolute difference of mouse's location and cat A's location
//save to variable
//check the absolute difference of mouse's location and cat B's location
//save to variable
// if the same, print Mouse C
// if not, print Cat A or Cat B, respectively
function catAndMouse(x, y, z) {







}

console.log(catAndMouse(1,2,3))