
// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
   let sum = bill.reduce((a, b) => a+b);
   let notEaten = bill[k];
   let correctSplit = (sum - notEaten)/2;

  if (b === correctSplit){
   console.log('Bon Appetit')
 } else {
   console.log(b - correctSplit);
 }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));

