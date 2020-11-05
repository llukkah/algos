// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let shared = 5
    let days = 1
    let totalLikes = 0
    
    while ( days <= n ) {
        let likes = Math.floor(shared / 2)
        shared = likes * 3
        totalLikes += likes
        days +=1;
    }
    return totalLikes
}

console.log(viralAdvertising(3))