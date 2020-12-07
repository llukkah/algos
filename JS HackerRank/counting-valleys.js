// https://www.hackerrank.com/challenges/counting-valleys/problem
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
