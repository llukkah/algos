// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

// FUNCTION DESCRIPTION
// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.

// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

// INPUT FORMAT
// int h[26]: the heights of each letter
// string word: a string

// OUTPUT FORMAT
// int: the size of the highlighted area

// SAMPLE INPUT
// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc

// SAMPLE OUTPUT
// 9

// EXPLANATION
// We are highlighting the word abc:

//Letter heights are A = 1,  B= 3 and C = 1. The tallest letter, b, is 3mm high. The selection area for this word is 3 * 1mm * 3mm = 9mm^2.

function designerPdfViewer(h, word) {
  let wordArr = Array.from(word);
  let myMap = new Map();
  let heightArr = [];
  let alphabet = [];
  let maxHeight = 0;
  const start = "a".charCodeAt(0);
  const last = "z".charCodeAt(0);
  for (var i = start; i <= last; i += 1) {
    alphabet.push(String.fromCharCode(i));
  }
  console.log(alphabet);
  for (let i = 0; i < alphabet.length; i += 1) {
    myMap.set(alphabet[i], h[i]);
  }
  console.log(myMap);
  for (var i = 0; i < wordArr.length; i += 1) {
    heightArr.push(myMap.get(wordArr[i]));
  }
  maxHeight = Math.max(...heightArr);
  console.log(maxHeight);
  console.log(maxHeight * word.length);
}

console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
    ],
    "TOM"
  )
);
