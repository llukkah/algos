// https://www.hackerrank.com/challenges/electronics-shop/problem
function getMoneySpent(keyboards, drives, b) {
  let keys = keyboards.sort((a, b) => b - a); // [3,1]
  let usb = drives.sort((a, b) => b - a); // [8,5,2]

  let purchase = [];

  for (let k = 0; k < keys.length; k++) {
    for (let u = 0; u < usb.length; u++) {
      if (keys[k] + usb[u] <= b) {
        purchase.push(keys[k] + usb[u]);
      } else continue;
    }
  }

  purchase.sort((a, b) => b - a); // [ 9, 8, 6, 5, 3 ]

  for (let i = 0; i < purchase.length; i++) {
    if (purchase[i] <= b) {
      return purchase[i];
    } else continue;
  }
  return -1;
}

console.log(getMoneySpent([4], [5], 5));
console.log(getMoneySpent([3, 1], [8, 5, 2], 10));
