/////////////////////////////////////////////////
////////Repeat a given string (`str`)///////////
//////// a given number of times (`num`)./////////
////// The output should return a string.////////
//////////////////////////////////////////////////

const repeatString = (str, num) => {
  let repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
};
