///////////////////////////////////////////////////////////
// Create a function which takes one argument/////////////
///////– an array of arrays of integers– arr.///////////////
/////////// Create a new array which takes the /////////////
/////////////largest element from each array./////////////////
///////////// The output should be an array.////////////////
///////////////////////////////////////////////////////////
const largestOfEach = (arr) => {
  return arr.map((a) => Math.max(...a));
};

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
