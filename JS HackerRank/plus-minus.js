// https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
  let pos = [];
  let neg = [];
  let zero = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else if (arr[i] == 0) {
      zero.push(arr[i]);
    } else pos.push(arr[i]);
  }
  console.log((pos.length / arr.length).toFixed(6));
  console.log((neg.length / arr.length).toFixed(6));
  console.log((zero.length / arr.length).toFixed(6));
}
