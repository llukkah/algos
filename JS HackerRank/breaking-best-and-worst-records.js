// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24]. Scores are in the same order as the games played. She would tabulate her results as follows:

// Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1

// Given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.

// INPUT FORMAT
// The first line contains an integer n, the number of games.
// The second line contains n space-separated integers describing the respective values of score0, score1, .... scote n-1.

// OUTPUT FORMAT
// Print two space-seperated integers describing the respective numbers of times the best (highest) score increased and the worst (lowest) score decreased.

// SAMPLE INPUT
// 9
// 10 5 20 20 4 5 2 25 1

// SAMPLE OUTPUT
// 2 4

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
