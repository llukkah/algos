//create array alphabet
// create array of objects - key value pair w the arrAlphabet and arr height

// when given the word, look up the value and push into new Array

// find highest number  - sory array from highest to lowest

// convert word into an array from a string 

// multiply hightest with wordArray.length


let alphabet = [];
let  alphabetArr = function () { 
  const start = 'A'.charCodeAt(0);
  const last  = 'Z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabet.push(String.fromCharCode(i));
} 
return alphabet
}
  console.log(alphabetArr());




// input:
// arrAlphabetHeight = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// sample - abc

// output - 9