// https://www.hackerrank.com/challenges/sherlock-and-squares/problem



function squares(a, b) {
let count = 0
for(let i = 1; i <= b; i += 1) {
    let square = i*i
    if (square >=a && square <=b) {
        count ++
    }
}
return count

///
// let c = (Math.floor(Math.sqrt(b)) -Math.ceil(Math.sqrt(a)))
// return c + 1
