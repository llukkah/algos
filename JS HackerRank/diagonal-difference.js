// https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < arr.length; i += 1) {
    firstDiagonal += arr[i][i];
    let j = arr.length - i;
    secondDiagonal += arr[i][j - 1];
  }
  // return firstDiagonal
  let diagonal = firstDiagonal - secondDiagonal;
  let result = Math.abs(diagonal);
  return result;

  // return result
  //     arr[0][0]
  //     arr[1][1]
  //     arr[2][2]

  //     arr[0][2]
  //     arr[1][1]
  //     arr[2][0]

  // i = 0 length = 3 length-[i] = 2
  // i = 1 length = 3 length-[i] = 1
  // i = 2 length = 3 length-[i] = 0
}
