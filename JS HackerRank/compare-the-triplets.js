//https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// EXAMPLE

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// FUNCTION DESCRIPTION
// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):
// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating

// Return
// int[2]: Alice's score is in the first position, and Bob's score is in the second.

// INPUT FORMAT
// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

//SAMPLE INPUT
// 5 6 7
// 3 6 10

//SAMPLE OUTPUT
// 1 1

//EXPLANATION
// a[0] > b [0] so Alice receives 1 point.
// a[1] = b [1] so nobody receives a point.
// a[2] < b[2] so Bob receives 1 point.
// Alive's comparison score is 1 and Bob's comparison score is 1.  Thus, we return the array [1, 1].


function compareTriplets(a, b) {
    // let bob = 0
    // let alice = 0
    let result = [0,0]
    // a = [1,2,3]
    // b = [4,5,6]
    for(let i = 0; i < a.length; i+=1) {
        if (a[i] > b[i]){
            result[0] += 1
        }
        else if (a[i] < b[i]){
            result[1] += 1
        }
    }
      return result
}
