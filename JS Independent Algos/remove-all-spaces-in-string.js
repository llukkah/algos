//////////////////////////////////////////////////////////////////
////////// Remove all spaces from a string (`str`). /////////////
///////// The output should return a new string, with //////////
///////////////////// no spaces./////////////////////////////////
//////////////////////////////////////////////////////////////////
const removeSpaces = (str) => {
  return str.replace(/ /g, "");
};

console.log(removeSpaces("alphabet soup is green   "));
