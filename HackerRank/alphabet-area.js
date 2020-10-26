//create array alphabet
// convert word into an array from a string 
// create array of objects - key value pair w the arrAlphabet and arr height
// when given the word, look up the value and push into new Array
// find highest number  - sory array from highest to lowest
// multiply hightest with wordArray.length



function designerPdfViewer(h, word) {
  let wordArr = Array.from(word)
  let alphabet = [];
    const start = 'A'.charCodeAt(0);
    const last  = 'Z'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
      alphabet.push(String.fromCharCode(i));
    } 
    // return alphabet
  
//for loop - word array to find index from alphabet array.
//  and find same index in heightsArray and push that value into a new array
let wordHeights = []
// wordArr = ['a' , 'b', 'c']
  for (let i = 0; i <= wordArr.length; i += 1) {
    // console.log(wordArr[i]) // [a, b ,c ]
    // console.log(wordArr.indexOf(wordArr[i])) // [0, 1, 2]
    for (let j = 0; j <= alphabet.length; j += 1){
      console.log(alphabet.includes(wordArr[i])) //CASE SENSITIVE
      // console.log(alphabet)
      if (alphabet.includes(wordArr[i])) {
        let alphabetIndex = alphabet.indexOf(wordArr[i])
        // console.log(alphabet.indexOf(wordArr[i])) [0, 1, 2] 26x each
        let found = h.find(element => element === alphabetIndex);
        // console.log(found)

      }
      // if (alphabet[j] == wordArr[i]) {
        // alphabet.indexOf(alphabet[j])
        // return alphabet.indexOf(alphabet[j])
      }

    }
  }
// }


console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'TOM'))
// input:
// arrAlphabetHeight = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// sample - a

// output - 9