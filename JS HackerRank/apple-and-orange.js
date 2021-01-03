// https://www.hackerrank.com/challenges/apple-and-orange/problem

// FUNCTION DESCRIPTION
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// INPUT FORMAT
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.



function countApplesAndOranges(s, t, a, b, apples, oranges) {
// s: integer, starting point of Sam's house location.
// 7
// t: integer, ending location of Sam's house location.
// 11
// a: integer, location of the Apple tree.
// 5
// b: integer, location of the Orange tree.
// 15
// apples: integer array, distances at which each apple falls from the tree. -2 2 1
// oranges: integer array, distances at which each orange falls from the tree.5 -6
let appleCount = 0
let orangeCount = 0
for (let i = 0; i <apples.length; i += 1) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
        appleCount ++;
    }
}
for (let i = 0; i <oranges.length; i += 1) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
        orangeCount ++;
    }
}
console.log(appleCount)
console.log(orangeCount)

}