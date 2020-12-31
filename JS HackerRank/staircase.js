https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
for (let i=0; i<n; i++){
    // note: join() requires a minimum 
    //   of 2 array elements to have any effect
    var spaces = new Array(n-i).join(" "); 
    var hashes = new Array(2+i).join("#");
    console.log(spaces+hashes);      
}

}

