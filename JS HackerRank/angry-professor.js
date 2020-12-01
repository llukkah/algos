// https://www.hackerrank.com/challenges/angry-professor/problem

// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime >= 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// Function Description
// Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

// angryProfessor has the following parameter(s):
// int k: the threshold number of students
// int a[n]: the arrival times of the n students

// Returns
// string: either YES or NO

//PSEUDOCODE
//sort the array
//create counter
//iterate through array to find on time arrival times (<= 0)
//if arrival time[i] <=0, counter +=1
//if counter is >= k, return No.

function angryProfessor(k, a) {
    let counter = 0;
    let sortedArr = a.sort(function(a,b) {return a-b})
    for (let i = 0; i <= sortedArr.length; i += 1) {
        if (sortedArr[i] < 0 || sortedArr[i] === 0) {
            counter += 1;
        }
        } if(counter >= k) {
            return 'NO'
        } else {
            return 'YES'
    }
}

console.log(angryProfessor(3, [-1, -3, 4, 2])) // YES
// console.log(angryProfessor(2, [0, -1, 2, 1])) // NO