//https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
    // Write your code here
    let total=0
    let current = a[a.length-1]
    while (current <= b[0]) {
        if (a.every(n => !(current%n))) {
            if (b.every(n => !(n%current))) {
                total++;
            }
        }
        current += 1
    }
    return total
}