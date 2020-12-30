// https://www.hackerrank.com/challenges/service-lane/problem

// FUNCTION DESCRIPTION
// A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.

// You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

// EXAMPLE
// n = 4
// width = [2, 3, 2, 1]
// cases = [[1, 2], [2, 4]]

// If the entry index, i = 1 and the exit j = 2, there are two segment widths of 2 and 3 respectively.  the widest vehicle that can fit through both is 2.  If i = 2 and j = 4 the widths are [ 3, 2 ,1] which limits vehicle to 1.

// INPUT FORMAT
//int n: the size of the width array
// int cases[t][2]: each element contains the starting and ending indices for a segment to consider, inclusive

// OUTPUT FORMAT
// int[t]: the maximum width vehicle that can pass through each segment of the service lane described

// SAMPLE INPUT
// STDIN               Function
// -----               --------
// 8 5                 n = 8, t = 5
// 2 3 1 2 3 2 3 3     width = [2, 3, 1, 2, 3, 2, 3, 3]
// 0 3                 cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
// 4 6
// 6 7
// 3 5
// 0 7

// SAMPLE OUTPUT
// 1
// 2
// 3
// 2
// 1

// EXPLANATION
// Below is the representation of the lane:
//    |HIGHWAY|Lane|    ->    Width
// 0: |       |--|            2
// 1: |       |---|           3
// 2: |       |-|             1
// 3: |       |--|            2
// 4: |       |---|           3
// 5: |       |--|            2
// 6: |       |---|           3
// 7: |       |---|           3

// (0, 3): : From index 0 through 3 we have widths 2, 3, 1 and 2. Nothing wider than 1 can pass all segments.
// (4, 6): From index 4 through 6 we have width 3, 2  and 3. Nothing wider than 2 can pass all segments.
// (6, 7): 3, 3 --> 3 .
// (3, 5): 2, 3, 2 --> 2
// (0, 7): 2, 3, 1, 2, 3, 2, 3, 3 --> 1

/*
let widths = [2, 3, 1, 2, 3, 2, 3, 3]
let cases = [[0,3], [4,6], [6,7], [3,5], [0,7]]
For each test case, print the number that represents the largest 
vehicle type that can pass through the entire segment
of the service lane between indexes and inclusive.
i.e. return an array with the smallest width 
---------
PUESDOCODE
---------
loop through each of the cases
pick the smallest value inside n between the indexes given by case
push it into a new array 
new array = the answer
*/
let n = [2, 3, 1, 2, 3, 2, 3, 3]; // array of widths
// cases = [[i,j], [startIndex, endIndex], [enterSideRoad, exit]]
let cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
]; // i.e. segments
// output = [   1,      2,      3,      2,      1   ]
function serviceLane(n, cases) {
  let largestVehicle = [];
  for (let i = 0; i < cases.length; i += 1) {
    let startN = cases[i][0]; // 0
    let endN = cases[i][1]; // 3
    let sideLane = n.slice(startN, endN + 1);
    largestVehicle.push(Math.min(...sideLane));
  }
  return largestVehicle;
}
console.log(serviceLane(n, cases));
