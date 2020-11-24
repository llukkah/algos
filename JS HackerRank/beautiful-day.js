// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
function beautifulDays(i, j, k) {

  let arr = [] // [20, 21,22,23]
  for (let m = i; m <=j; m++){
    arr.push(m)
  }

  let rev = [] // [ '02', '12', '22', '32' ]
  for (let n = 0; n < arr.length; n++){
    rev.push(arr[n]
      .toString()
      .split('')
      .reverse()
      .join('')
    )
  }

  let beautifulDayCount = 0;

  for (let d = 0; d < arr.length; d++){
    let difference = Math.abs(arr[d] - rev[d]);
    if (difference % k === 0) {
      beautifulDayCount += 1
    }
  }
  return beautifulDayCount

}

console.log(beautifulDays(20, 23, 6))
