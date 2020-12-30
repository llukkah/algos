// You won some money in a msContentScript, and your winnings are a stack of bills in various denominations.  You know you have five bills of one kind and you want to know which denomination that is.  Write a function that will return the denomination within the array which has n occurances.Write

// SAMPLE INPUT
// [10, 20, 20, 5, 5, 5 ,20, 10, 2, 20, 100]
// n = 4

// SAMPLE OUTPUT
// 20

// Assume that the array contains numbers which will result in only one selection.
// Be sure to return the number not a new array of that number.

function findNumberWithNOccurances(numbers, n) {
  let count = numbers.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});
  return Object.keys(count).find((key) => count[key] === n);
}

console.log(
  findNumberWithNOccurances([10, 20, 20, 5, 5, 5, 20, 10, 2, 20, 100], 4)
);
