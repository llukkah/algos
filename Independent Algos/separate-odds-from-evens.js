//////////////////////////////////////////////////////////////////
/////////////////  Create an algorithm which takes ///////////////
//////////////a given array of integers (arr) and /////////////////
////////////// separates the odds from the evens. /////////////////
/////////////The output should be a new array which ///////////////
////////////has all even integers (ordered from //////////////////
//////////////lowest to highest) all odd integers are ///////////
//////////////////(ordered from highest to lowest). //////////////
//////////////////////////////////////////////////////////////////
const oddsFromEvens = arr => {
    let odd = [];
    let even = [];
    let returnArr = [];
    let sortArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortArr.length; i++)
      if (sortArr[i] % 2 === 0) {
        even.push(sortArr[i]);
      } else {
        odd.push(sortArr[i]);
      }
    let oddReverse = odd.reverse();
    returnArr = even.concat(oddReverse);
    return returnArr;
  };