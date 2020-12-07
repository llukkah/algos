//https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  let result = ar.reduce((sum, num) => {
    return sum + num;
  });

  return result;
}
