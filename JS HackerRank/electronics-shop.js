// https://www.hackerrank.com/challenges/electronics-shop/problem

// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

// Example
// b = 60;
// keyboards = [40, 50, 60];
// drives = [5, 8, 12];

// The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB Drive = 58. Choose the latter as the more expensive option and return 58.

// FUNCTION DESCRIPTION

// getMoneySpent has the following parameter(s):
// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget

// Returns
// int: the maximum that can be spent, or  if it is not possible to buy both items

// INPUT FORMAT
// The first line contains three space-separated integers b, n, and m, the budget, the number of keyboard models and the number of USB drive models.
// The second line contains n space-separated integers keyboard[i], the prices of each keyboard model.
// The third line contains m space-separated integers drives, the prices of the USB drives.

// SAMPLE INPUT 0
// 10 2 3
// 3 1
// 5 2 8

// SAMPLE OUTPUT 0
// 9

// EXPLANATION 0
// Buy the 2nd keyboard and the 3rd USB drive for a total cost of 8 + 1 = 9.

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
