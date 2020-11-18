//////////////////////////////////////////////////////////////////////////
/////////////////////Check for all unique integers between////////////////
///////////////////// two arrays (`arr1` and `arr2`)./////////////////////
/////////////////////The output should return an array////////////////////
////////////////////with all the unique numbers//////////////////////////
///////////////  (the numbers that are **not** in both arrays).//////////
////////////////////////////////////////////////////////////////////////
const arrDifferences = (arr1, arr2) => {
    let arr = [];
    
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      arr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      arr.push(arr2[j]);
    }
  }
  return arr;
  }
  console.log(arrDifferences([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]))
  