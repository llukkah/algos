//////////////////////////////////////////////////
///////////Write a function that takes ///////////
//////// a given string (`str`) and checks ///////
////////for the longest individual word//////////
//////////////// in that string./////////////////
////////The output should return a string.///////
//////////////////////////////////////////////////
const longestWord = (str) => {
  let word = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
};
