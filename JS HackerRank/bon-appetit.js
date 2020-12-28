// https://www.hackerrank.com/challenges/bon-appetit/problem

// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item  k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4+ 6)/2 = 6. In the second case, he should refund 3 to Anna.

// FUNCTION DESCRIPTION

// bonAppetit has the following parameter(s):
// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// OUTPUT
// If Brian didn't overcharge Anna, print Bon Appetit.
// Otherwise, print the difference that Brian must refund to Anna.

function bonAppetit(bill, k, b) {
  let sum = bill.reduce((a, b) => a + b);
  let notEaten = bill[k];
  let correctSplit = (sum - notEaten) / 2;

  if (b === correctSplit) {
    console.log("Bon Appetit");
  } else {
    console.log(b - correctSplit);
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
