// https://leetcode.com/problems/move-zeroes/
/////////////////////////////////////////////
/////////////////////////////////////////////
//////////// Both functions work ////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
// pseudo
// for loop to iterate through the array
// if the element is 0
// then splice to remove from the array... splice (arr[i], 1)
// push  - end of array
// return original array


function moveZerosToEnd(arr) {
	// your code goes here
  for (let i=0; i <= arr.length; i += 1) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      arr.push(0)
      i -= 1 
    } else { 
      continue
    }
  }
   return arr
}


var moveZerosToEnd = function(arr) {
    let slow = 0
    let fast = 0
    
    while(fast < arr.length) {
      if (arr[slow] === arr[fast]) { // if they match move
        fast++
      } else if (arr[slow] !== 0) { // slow isn't zero, move
        slow++
      } else if (arr[fast] === 0) { // fast is zero, move
        fast++
      } else if (arr[slow] === 0 && arr[fast] !== 0) {
        [arr[slow], arr[fast]] = [arr[fast], arr[slow]] // swap values
        slow++
        fast++
      }
    }
    return arr
  };

  console.log(moveZerosToEnd([0,0,3]), [3,0,0])
  
  /*
  Two Pointers
  Time O(n)
  Space O(1)
  
  slow = 0
  fast = 0
  
  [1, 0, 2, 0, 3] (swap)
      s
         f 
  
  [1, 2, 0, 0, 3] (swap)
         s
               f 
               
  
  [1, 2, 3, 0, 0]
         s
                 f
  
  
  Brute Force
  Time O(n^2)
  Space O(1)
  
    two for loops
      when i is 0 and j isn't, then swap the values
  
  [0, 0, 0, 0, 0] Make sure you don't get stuck in an infinite loop 
  
  [3, 0, 0] 1, caught in an infinite loop
  
   0, 1, 2 index
  [0, 0, 3] start
  [0, 3, 0] end
  
  i e
  0 0 splice(i, 1) push(0) i++
  1 3 continue
  2 0 splice(i, 1) push(0) i++
  
   0, 1, 2, 3, 4  5 index
  [1, 2, 0, 3, 0], splice(i, 1) remove 0 index 1
            i
            j
  
  const clone = slice(0, 3) -> create a new array [1, 0, 2, 0]
  splice(0, 1) -> removes from original
      
  O(1) -> constant O(1 operation)
  O(lg n) -> halving O(n / 2 operations)
  O(n) -> linear O(5 operations)
  O(n^2) -> quadratic O(25 operations)
  
  1 for loop O(n)
   splice O(n) - two for loops
  */