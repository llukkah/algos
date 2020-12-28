// https://www.hackerrank.com/challenges/counting-valleys/problem
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly STEPS steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

const { format } = require("path");

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// INPUT FORMAT
// int steps: the number of steps on the hike
// string path: a string describing the path

// OUTPUT FORMAT
// int: the number of valleys traversed

// Sample Input
// 8
// UDDDUDUU

// Sample Output
// 1

// Explanation
// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

function countingValleys(steps, path) {
  let pathArr = path.split("");
  let valleyCount = 0;
  let currentLevel = 0;

  for (let i = 0; i < pathArr.length; i += 1) {
    if (pathArr[i] == "D") {
      currentLevel--;
    } else {
      currentLevel++;
      if (currentLevel === 0) {
        valleyCount++;
      }
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, "UDDDUDUU"));
