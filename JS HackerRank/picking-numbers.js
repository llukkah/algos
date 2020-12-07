// https://www.hackerrank.com/challenges/picking-numbers/problem
pickingNumbers = (arr) => {
  let sorted = a.sort((a, b) => a - b);
  let counter = 0;
  let max = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] <= 1) {
      counter += 1;
    }
    if (counter > max) {
      max = counter;
    }
  }
  return max;
};

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
