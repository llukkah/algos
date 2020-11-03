// https://www.hackerrank.com/challenges/utopian-tree/problem

/*
PROBLEM
-------
trees go through 2 growths a year
spring = growth * 2
summer = growth + 1
if planted right before spring growth
how tall will it be after n growths?
PSUEDOCODE
---------
spring growth = 1 gc
summer growth = 1 gc
spring + summer = 2 gc
if n odd is an number it will return after a spring cycle 
if n is an even number return after a summer cycle
*/
function utopianTree(n) {
    let growth = 1;
    for (let i = 0; i < n; i++){
      let spring = growth * 2
      let summer = spring + 1
      growth = summer
      i++
    }
    if (n % 2 !== 0) {
      return growth -1 
    } else {
      return growth
    }
  }
  console.log(utopianTree(4))