///////////////////////////////////////////////////////////////
////////////////Create a function that adds all///////////////
//////////// numbers of a provided array (`arr`), ////////////
////////////////accounting for non-integer values/////////////
/////////////////////// in `arr`.//////////////////////////////
/////////////The output should return an integer.//////////////
///////////////////////////////////////////////////////////////

const sumAllInArray = (arr) => {
  let newArr = arr.filter((n) => {
    return Number(!isNaN(n));
  });
  let t = newArr.reduce((total, n) => {
    return Number(total) + Number(n);
  });
  return t;
};
