// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highestScoreChanged = 0;
  let lowestScoreChanged = 0;
  let highestLowest = [];
  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestScoreChanged += 1;
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      lowestScoreChanged += 1;
    }
  }
  highestLowest.push(highestScoreChanged);
  highestLowest.push(lowestScoreChanged);
  return highestLowest;
}
