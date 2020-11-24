// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
 let count = 0

for(let i = 0; i < s.length; i++) {

    let arr = s.slice(0 + i, m + i)

    if(arr.reduce((a,b) => a+ b) === d) {           
        count++         
    }      

}
return count
}


