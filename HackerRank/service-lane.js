// https://www.hackerrank.com/challenges/service-lane/problem
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
let n = [2, 3, 1, 2, 3, 2, 3, 3] // array of widths
// cases = [[i,j], [startIndex, endIndex], [enterSideRoad, exit]]
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]] // i.e. segments
// output = [   1,      2,      3,      2,      1   ]
function serviceLane(n, cases) {
  let largestVehicle = []
  for (let i = 0; i < cases.length; i += 1){
    let startN = cases[i][0] // 0
    let endN = cases[i][1] // 3
    let sideLane = n.slice(startN, endN + 1)
    largestVehicle.push(Math.min(...sideLane))
  }
  return largestVehicle
}
console.log(serviceLane(n, cases))