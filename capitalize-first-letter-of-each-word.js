
//////////////////////////////////////////////////
///////Create a function which takes a //////////
////// given string (`str`) and capitalizes/////
////// the first letter of each word./////////////
////////The output should be a new string.///////
//////////////////////////////////////////////////
const titleCase = str => {
    let space = false;
    let firstLetter = true;
    console.log(str);
    let arr = str.split(" ");
    let newArr = [];
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      let firstLetter = true;
      let newWord = "";
      for (let j = 0; j < word.length; j++) {
        if (word[j].match(/[A-Za-z]/) && firstLetter) {
          let upper = word[j].toUpperCase();
          word[j] = upper;
          // console.log("w = " + upper);
          firstLetter = false;
          newWord = newWord + upper;
        } else {
          newWord = newWord + word[j];
        }
      }
      newArr.push(newWord);
    }
    return newArr.join(" ");
  };