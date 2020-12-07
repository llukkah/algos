///////////////////////////////////////////////////////////
///// Create a function which takes two arguments, ////////
/////////////a given array, arr, and a number, size.////////
///////////// Using the elements from arr, the function ////
//////////should create new arrays which consist of a //////
/////////////////////maximum of size elements.//////////////
////////// Any remaining elements should be placed ////////
///////////////////in the final array./////////////////////
//////////////The output should be an array of arrays./////
///////////////////////////////////////////////////////////
const sharingElements = (arr, size) => {
  let allArr = [];
  let splitArr = [];
  while (arr.length > size) {
    splitArr = arr.splice(0, size);
    allArr.push(splitArr);
  }
  // push the remaining
  if (arr.length > 0) {
    allArr.push(arr);
  }
  return allArr;
};
console.log(sharingElements(["a", "b", "c", "d"], 3));
console.log(sharingElements(["a", "b", "c", "d"], 4));
