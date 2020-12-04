//https://www.hackerrank.com/challenges/compare-the-triplets/problem

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